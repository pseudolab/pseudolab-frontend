const URL = "http://localhost:8000";

export const getMyBingo = async (userId: string) => {
    const response = await fetch(`${URL}/api/bingo/boards/${userId}`);
    if (response.ok === false) {
        return [];
    }
    const data = await response.json();
    const boardData = data["board_data"]
    const items = Object.keys(boardData).map(key => ({
        ...boardData[key],
        id: key
      }));
    return items;
}

export const getSelectedWords = async (userId: string) => {
    const response = await fetch(`${URL}/api/bingo/boards/selected_words/${userId}`);
    if (response.ok === false) {
        return [];
    }
    const data = await response.json();
    const userSelectedWords = data["selected_words"]
    return userSelectedWords
}
