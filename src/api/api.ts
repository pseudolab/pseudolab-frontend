const URL = "http://34.125.163.236:8000"; // TEMPORARY

export const singUpUser = async (username: string) => {
  const response = await fetch(`${URL}/api/auth/bingo/sign-up?username=${username}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.ok;
}

export const getUser = async (username: string) => {
  const response = await fetch(`${URL}/api/auth/bingo/get-user?username=${username}`);
  if (response.ok === false) {
    return null;
  }
  const data = await response.json();
  return data;
}

export const createBingoBoard = async (
  userId: string,
  boardData: {
    [key: string]: { value: string; status: number; selected: number };
  }
) => {
  const response = await fetch(`${URL}/api/bingo/boards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ board_data: boardData, user_id: parseInt(userId) }),
  });
  return response.ok;
};

export const getBingoBoard = async (userId: string) => {
  const response = await fetch(`${URL}/api/bingo/boards/${userId}`);
  if (response.ok === false) {
    return [];
  }
  const data = await response.json();
  const boardData = data["board_data"];
  const items = Object.keys(boardData).map((key) => ({
    ...boardData[key],
    id: key,
  }));
  return items;
};

export const getSelectedWords = async (userId: string) => {
  const response = await fetch(
    `${URL}/api/bingo/boards/selected_words/${userId}`
  );
  if (response.ok === false) {
    return [];
  }
  const data = await response.json();
  const userSelectedWords = data["selected_words"];
  return userSelectedWords;
};

export const updateBingoBoard = async (
  send_user_id: string,
  receive_user_id: string
) => {
  const response = await fetch(
    `${URL}/api/bingo/boards/bingo_status/${send_user_id}/${receive_user_id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.ok;
};
