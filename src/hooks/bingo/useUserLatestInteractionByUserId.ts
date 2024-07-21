import { useQuery } from "@tanstack/react-query";
import QueryKeyGenerator from "../common/QueryKeyGenerator";
import { getUserLatestInteraction } from "../../api/bingo_api";

export const useUserLatestInteractionByUserId = (userId: string) => {
    return useQuery({
        queryKey: QueryKeyGenerator.userLatestInteraction(userId),
        queryFn: () => {
            const data = getUserLatestInteraction(userId)
            if (!data) {
                throw new Error("User latest interaction not found");
            }
            return data;
        }
    });
}