import { useState, useEffect } from "react";
import BingoPresenter from "./BingoPresenter";
import {
  getBingoBoard,
  getSelectedWords,
  updateBingoBoard,
  createBingoBoard,
} from "../../api/api.ts";
import { defafultBingoBoard } from "./components/DefaultBingoBoard.ts";

const MyID = "1";

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
  const [userSelectedWords, setUserSelectedWords] = useState<string[]>([]);
  const initBingoBoard = async () => {
    const boardData: {
      [key: string]: { value: string; status: number; selected: number };
    } = {};
    defafultBingoBoard.forEach((item, index) => {
      return (boardData[index] = {
        value: item.value,
        status: [myWord1, myWord2, myWord3].includes(item.value) ? 1 : 0,
        selected: [myWord1, myWord2, myWord3].includes(item.value) ? 1 : 0,
      });
    });
    await createBingoBoard(MyID, boardData);
  };
  const refreshBingoWords = async () => {
    const newBingoWords = await getBingoBoard(MyID);
    setBingoWords(newBingoWords);
  };
  const sendMyWords = async (opponentID: string) => {
    const opponentBingoBoard = await getBingoBoard(opponentID);

    const updatedOpponentBingoBoard: {
      [key: string]: { value: string; status: number; selected: number };
    } = {};

    opponentBingoBoard.forEach((item) => {
      updatedOpponentBingoBoard[item.id] = {
        value: item.value,
        status: userSelectedWords.includes(item.value) ? 1 : 0,
        selected: item.selected,
      };
    });

    updateBingoBoard(opponentID, updatedOpponentBingoBoard);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpponentID(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBingoWords = await getBingoBoard(MyID);
      const fetchedSelectedWords = await getSelectedWords(MyID);
      setBingoWords(fetchedBingoWords);
      setUserSelectedWords(fetchedSelectedWords);
    };
    fetchData();
  }, []);

  return (
    <BingoPresenter
      bingoWords={bingoWords}
      userSelectedWords={userSelectedWords}
      myID={MyID}
      opponentID={opponentID}
      myWord1={myWord1}
      myWord2={myWord2}
      myWord3={myWord3}
      handleWordChange={handleWordChange}
      onRefreshBingoWords={refreshBingoWords}
      onClickSendWords={sendMyWords}
      handleInputChange={handleInputChange}
      onClickButton={initBingoBoard}
    />
  );
};

export default BingoContainer;
