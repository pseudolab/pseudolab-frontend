import { Box } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import BoardList from "./components/BoardList";
import type { BoardItemProps } from "./types/Board";

const DUMMY_BOARD_LIST: BoardItemProps[] = [
  {
    title: "테스트1",
    author: "kwang1",
    createdAt: new Date("2024-03-10T13:19:11+0000").getTime(),
    viewCount: 5,
    commentCount: 2,
    likeCount: 3,
  },
  {
    title: "테스트2",
    author: "kk1",
    createdAt: new Date("2024-05-20T13:19:11+0000").getTime(),
    viewCount: 10,
    commentCount: 3,
    likeCount: 10,
  },
];

const BoardContainer = () => {
  const [searchParams] = useSearchParams();

  console.log("보드 그리기");
  let page = searchParams.get("page");
  let count = searchParams.get("count");

  const boardPageCount: number = 10;
  const boardItemList: BoardItemProps[] = DUMMY_BOARD_LIST;

  return (
    <Box>
      <BoardList items={boardItemList}></BoardList>
    </Box>
  );
};

export default BoardContainer;
