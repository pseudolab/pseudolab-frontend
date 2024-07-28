export default {
    user: (username: string) => ['user', username],
    bingoBoard: (userId: string) => ['bingoBoard', userId],
    userLatestInteraction: (userId: string) => ['userLatestInteraction', userId],
}