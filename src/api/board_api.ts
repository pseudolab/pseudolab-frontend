const API_URL: string = import.meta.env.VITE_DISCORD_OAUTH2_URL;

export const createBoard = async (
  password: string,
  boardData: { contents: string }
) => {
  const response = await fetch(`${API_URL}/api/bingo/boards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ board_data: boardData, user_id: parseInt(userId) }),
  });
  return response.ok;
};
