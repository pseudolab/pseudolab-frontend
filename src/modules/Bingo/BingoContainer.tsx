import { useState, useEffect } from "react";
import BingoPresenter from "./BingoPresenter";
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

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const BingoContainer = () => {
  const [myWord1, setMyWord1] = useState("");
  const [myWord2, setMyWord2] = useState("");
  const [myWord3, setMyWord3] = useState("");
  const handleWordChange = {
    setMyWord1,
    setMyWord2,
    setMyWord3,
  };
  const [bingoWords, setBingoWords] = useState<
    { value: string; status: number }[]
  >([]);
  const [opponentID, setOpponentID] = useState("");
  const [recentWords, setRecentWords] = useState(localStorage.getItem("recentWords") || "");
  const [recentSendUser, setRecentSendUser] = useState(localStorage.getItem("recentSendUser") || "");
  const MyID = useInput(localStorage.getItem("myID") || "");
  const [userSelectedWords, setUserSelectedWords] = useState<string[]>([]);
  const initBingoBoard = async () => {
    const boardData: {
      [key: string]: { value: string; status: number; selected: number };
    } = {};
    let bingoBoard = shuffleArray(defafultBingoBoard);
    bingoBoard.forEach((item, index) => {
      return (boardData[index] = {
        value: item.value,
        status: [myWord1, myWord2, myWord3].includes(item.value) ? 1 : 0,
        selected: [myWord1, myWord2, myWord3].includes(item.value) ? 1 : 0,
      });
    });
    localStorage.setItem("myWordList", [myWord1, myWord2, myWord3].join(","));

    if (MyID.value != "") {
      await singUpUser(MyID.value);
      const user = await getUser(MyID.value);
      await createBingoBoard(user.user_id, boardData);
    }
  };
  const refreshBingoWords = async () => {
    const user = await getUser(MyID.value);
    const newBingoWords = await getBingoBoard(user.user_id);
    const userLatestInteraction = await getUserLatestInteraction(user.user_id);

    if (userLatestInteraction) {
      const sendUserName = await getUserName(userLatestInteraction.send_user_id);
      const wordList = userLatestInteraction.word_id_list
      localStorage.setItem("recentWords", wordList);
      localStorage.setItem("recentSendUser", sendUserName);
      setRecentWords(wordList);
      setRecentSendUser(sendUserName);
    }
    setBingoWords(newBingoWords);
  };
  const sendMyWords = async () => {
    const user = await getUser(MyID.value);
    const opponent = await getUser(opponentID);
    updateBingoBoard(user.user_id, opponent.user_id);
    const myWords = localStorage.getItem("myWordList");
    const res = await createUserBingoInteraction(
      myWords,
      user.user_id,
      opponent.user_id
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

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser(MyID.value);
      const fetchedBingoWords = await getBingoBoard(user.user_id);
      const fetchedSelectedWords = await getSelectedWords(user.user_id);
      setBingoWords(fetchedBingoWords);
      setUserSelectedWords(fetchedSelectedWords);
    };
    fetchData();
  }, []);

  return (
    <BingoPresenter
      bingoWords={bingoWords}
      userSelectedWords={userSelectedWords}
      myID={MyID.value}
      opponentID={opponentID}
      myWord1={myWord1}
      myWord2={myWord2}
      myWord3={myWord3}
      recentWords={recentWords}
      recentSendUser={recentSendUser}
      handleWordChange={handleWordChange}
      handleMyIDChange={handleMyIDChange}
      onRefreshBingoWords={refreshBingoWords}
      onClickSendWords={sendMyWords}
      handleInputChange={handleInputChange}
      onClickButton={initBingoBoard}
    />
  );
};

export default BingoContainer;
