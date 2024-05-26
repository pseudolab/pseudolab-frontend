import { Box } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import BoardList from "./components/BoardList";
import type { BoardItemProps, BoardItemListProp } from "./types/Board";

const DUMMY_BOARD_LIST: BoardItemProps[] = [
  {
    title: "테스트1",
    author: "kwang1",
    createdAt: Date.now(),
    viewCount: 5,
    commentCount: 2,
    likeCount: 3,
  },
  {
    title: "테스트2",
    author: "kk1",
    createdAt: Date.now(),
    viewCount: 10,
    commentCount: 3,
    likeCount: 10,
  },
];

const BoardContainer = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const count = searchParams.get("count");

  const boardItemList: BoardItemProps[] = DUMMY_BOARD_LIST;

  return (
    <Box>
      <BoardList items={boardItemList}></BoardList>
    </Box>
  );
};

export default BoardContainer;
