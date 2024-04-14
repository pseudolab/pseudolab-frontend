import { useState, useEffect } from 'react';
import BingoPresenter from './BingoPresenter';
import { getMyBingo, getSelectedWords } from '../../api/api.ts';

const MyID = "1"; 

const BingoContainer = () => {
    const [bingoWords, setBingoWords] = useState<{ value: string; status: number; }[]>([]);
    const [userSelectedWords, setUserSelectedWords] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedBingoWords = await getMyBingo(MyID);
            const fetchedSelectedWords = await getSelectedWords(MyID);
            setBingoWords(fetchedBingoWords);
            setUserSelectedWords(fetchedSelectedWords);
        };
        fetchData();
    }, []);

    return <BingoPresenter bingoWords={bingoWords} userSelectedWords={userSelectedWords} myID={MyID} />;
};

export default BingoContainer;