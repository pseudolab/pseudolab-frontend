import type { BoardItemProps } from "./types/Board";

export const DUMMY_BOARD_RESPONSE: BoardItemProps[] = [
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
