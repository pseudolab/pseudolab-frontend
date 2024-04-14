import { useState, useEffect } from "react";
import BingoPresenter from "./BingoPresenter";
import {
  getBingoBoard,
  getSelectedWords,
  updateBingoBoard,
} from "../../api/api.ts";

const MyID = "1";

const BingoContainer = () => {
  const [bingoWords, setBingoWords] = useState<
    { value: string; status: number }[]
  >([]);
  const [opponentID, setOpponentID] = useState("");
  const [userSelectedWords, setUserSelectedWords] = useState<string[]>([]);
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
      onRefreshBingoWords={refreshBingoWords}
      onClickSendWords={sendMyWords}
      opponentID={opponentID}
      handleInputChange={handleInputChange}
    />
  );
};

export default BingoContainer;
