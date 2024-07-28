import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBingoBoard } from "../../../api/bingo_api";
import QueryKeyGenerator from "../../common/QueryKeyGenerator";

export const useCreateBingoBoardMutation = async (sendUserId: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (args: {
            userId: string,
            boardData: {
                [key: string]: { value: string; status: number; selected: number };
            },
        }) => {
            const { userId, boardData } = args;
            return createBingoBoard(
                {
                    userId,
                    boardData,
                }
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: QueryKeyGenerator.bingoBoard(sendUserId) });
            queryClient.invalidateQueries({ queryKey: QueryKeyGenerator.userLatestInteraction(sendUserId) });
        }
    });
}