import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserBingoInteraction } from "../../../api/bingo_api";
import QueryKeyGenerator from "../../common/QueryKeyGenerator";

export const useCreateUserBingoInteractionMutation = async (sendUserId: string) => {
    const queryClient = useQueryClient();
    // 새로운 interaction을 생성하는 mutation입니다.
    return useMutation({
        mutationFn: (args: {
            word_id_list: string | null,
            send_user_id: number,
            receive_user_id: number
        }) => {
            const { word_id_list, send_user_id, receive_user_id } = args;
            return createUserBingoInteraction(
                {
                    word_id_list,
                    send_user_id,
                    receive_user_id
                }
            );
        },
        onSuccess: () => {
            // 새로운 interaction이 생성되면, 해당 유저의 bingo board와 latest interaction을 업데이트합니다.
            queryClient.invalidateQueries({ queryKey: QueryKeyGenerator.bingoBoard(sendUserId) });
            queryClient.invalidateQueries({ queryKey: QueryKeyGenerator.userLatestInteraction(sendUserId) });
        }
    });
};
