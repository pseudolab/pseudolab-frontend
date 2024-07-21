import { useQuery } from "@tanstack/react-query";
import QueryKeyGenerator from "../common/QueryKeyGenerator";
import { getBingoBoard } from "../../api/bingo_api";

export const useBingoBoardByUserId = (userId: string) => {
    return useQuery({
        queryKey: QueryKeyGenerator.bingoBoard(userId), // 쿼리 키를 통해서 쿼리들을 구분합니다. 나중에 쿼리키를 활용해서 해당 쿼리들을 reset 할 수 있습니다.
        queryFn: () => { // 쿼리 함수
            const data = getBingoBoard(userId)
            if (!data) {
                throw new Error("Bingo board not found");
            }
            return data;
        }
    });
}