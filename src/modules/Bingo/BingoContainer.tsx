import { useState, useEffect } from "react";
import BingoPresenter from "./BingoPresenter";
import { useLocation } from 'react-router-dom';
import {
  getBingoBoard,
  getSelectedWords,
  updateBingoBoard,
  createBingoBoard,
  getUser,
  singUpUser,
  createUserBingoInteraction,
  getUserLatestInteraction,
  getUserName
} from "../../api/bingo_api.ts";
import {
  defafultBingoBoard,
  shuffleArray,
} from "./components/DefaultBingoBoard.ts";
import { useUserByUsername } from "../../hooks/user/useUserById.ts";
import { useBingoBoardByUserId } from "../../hooks/bingo/useBingoBoardByUserId.ts";
import { useUserLatestInteractionByUserId } from "../../hooks/bingo/useUserLatestInteractionByUserId.ts";
import { useCreateUserBingoInteractionMutation } from "../../hooks/bingo/mutations/useCreateUserBingoInteractionMutation.ts";
import { useQueryClient } from "@tanstack/react-query";
import QueryKeyGenerator from "../../hooks/common/QueryKeyGenerator.ts";
import { useCreateBingoBoardMutation } from "../../hooks/bingo/mutations/useCreateBingoBoardMutation.ts";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const BingoContainer = () => {
  const location = useLocation();
  if (location.search === "?logout") {
    localStorage.setItem("myWordList", "");
    localStorage.setItem("recentWords", "");
    localStorage.setItem("recentSendUser", "");
    localStorage.setItem("myID", "");
  }

  const [myWord1, setMyWord1] = useState("");
  const [myWord2, setMyWord2] = useState("");
  const [myWord3, setMyWord3] = useState("");
  const [myWord4, setMyWord4] = useState("");
  const handleWordChange = {
    setMyWord1,
    setMyWord2,
    setMyWord3,
    setMyWord4,
  };
  const [bingoWords, setBingoWords] = useState<
    { value: string; status: number }[]
  >([]);
  const [opponentID, setOpponentID] = useState("");
  const [recentWords, setRecentWords] = useState(localStorage.getItem("recentWords") || "");
  const [recentSendUser, setRecentSendUser] = useState(localStorage.getItem("recentSendUser") || "");
  const [userSelectedWords, setUserSelectedWords] = useState<string[]>([]);
  const queryClient = useQueryClient();

  const MyID = useInput(localStorage.getItem("myID") || "");
  const { data: user, isLoading: userLoading } = useUserByUsername(MyID.value);
  const { data: opponent, isLoading: opponentLoading } = useUserByUsername(opponentID);
  const { data: myBingoBoard, isLoading: bingoBoardLoading } = useBingoBoardByUserId(user?.user_id);
  const { data: userInteraction, isLoading: userInteractionLoading } = useUserLatestInteractionByUserId(user?.user_id);
  const createUserBingoInteraction = useCreateUserBingoInteractionMutation(MyID.value);
  const createBingoBoard = useCreateBingoBoardMutation(MyID.value);

  useEffect(() => {
    if (userInteraction) {
      const fetchData = async () => {
        const sendUserName = await getUserName(userInteraction.send_user_id);
        const wordList = userInteraction.word_id_list;
        localStorage.setItem("recentWords", wordList);
        localStorage.setItem("recentSendUser", sendUserName);
        setRecentWords(wordList);
        setRecentSendUser(sendUserName);
      };
      fetchData();
    }
  }, [userInteraction]);

  useEffect(() => {
    if (myBingoBoard) {
      setBingoWords(myBingoBoard);
    }
  }, [myBingoBoard]);


  const initBingoBoard = async () => {
    const boardData: {
      [key: string]: { value: string; status: number; selected: number };
    } = {};
    let bingoBoard = shuffleArray(defafultBingoBoard);
    bingoBoard.forEach((item, index) => {
      return (boardData[index] = {
        value: item.value,
        status: [myWord1, myWord2, myWord3, myWord4].includes(item.value) ? 1 : 0,
        selected: [myWord1, myWord2, myWord3, myWord4].includes(item.value) ? 1 : 0,
      });
    });
    localStorage.setItem("myWordList", [myWord1, myWord2, myWord3, myWord4].join("|"));

    if (MyID.value != "") {
      const result = await singUpUser(MyID.value);
      if (result === false && !confirm("이미 누군가 사용중인 계정입니다. 정말 로그인하시겠습니까?") && !confirm("정말 로그인하시겠습니까???")) {
        localStorage.setItem("myWordList", "");
        localStorage.setItem("recentWords", "");
        localStorage.setItem("recentSendUser", "");
        localStorage.setItem("myID", "");
        return
      }

      const user = await getUser(MyID.value);
      await (await createBingoBoard).mutateAsync({ userId: user.user_id, boardData });
    }
  };
  const sendMyWords = async () => {
    updateBingoBoard(user.user_id, opponent.user_id); // 이것도 mutation으로 바꿀 수 있음
    const myWords = localStorage.getItem("myWordList");
    const res = await (await createUserBingoInteraction).mutateAsync(
      {
        word_id_list: myWords,
        send_user_id: user.user_id,
        receive_user_id: opponent.user_id
      }
    );
    return res;
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpponentID(event.target.value);
  };
  const handleMyIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    MyID.onChange(event);
    localStorage.setItem("myID", event.target.value);
  };


  return (
    <BingoPresenter
      bingoWords={bingoWords}
      userSelectedWords={userSelectedWords}
      myID={MyID.value}
      opponentID={opponentID}
      myWord1={myWord1}
      myWord2={myWord2}
      myWord3={myWord3}
      myWord4={myWord4}
      recentWords={recentWords}
      recentSendUser={recentSendUser}
      handleWordChange={handleWordChange}
      handleMyIDChange={handleMyIDChange}
      onRefreshBingoWords={() => queryClient.invalidateQueries({ queryKey: QueryKeyGenerator.bingoBoard(MyID.value) })}
      onClickSendWords={sendMyWords}
      handleInputChange={handleInputChange}
      onClickButton={initBingoBoard}
    />
  );
};

export default BingoContainer;
