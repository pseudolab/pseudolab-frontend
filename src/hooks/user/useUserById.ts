import { useQuery } from "@tanstack/react-query";

import { getUser as getUserByUsername } from "../../api/bingo_api";
import QueryKeyGenerator from "../common/QueryKeyGenerator";

export const useUserByUsername = (username: string) => {
    return useQuery({
        queryKey: QueryKeyGenerator.user(username), queryFn: () => {
            const data = getUserByUsername(username)
            if (!data) {
                throw new Error("User not found");
            }
            return data;
        }
    });
};