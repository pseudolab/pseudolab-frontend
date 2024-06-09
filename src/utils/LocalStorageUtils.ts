export const getNickName = (): string => {
    let nickname: string | null = localStorage.getItem("nickname")
    if (nickname === null)
        return ""
    return nickname;
}