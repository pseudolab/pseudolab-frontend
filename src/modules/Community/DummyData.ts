import type { BoardItemProps, BoardListResponse, CommentProps } from "./types/BoardTypes";

const DUMMY_COUNT: number = 1000;
const PAGE_COUNT: number = 50;

let DUMMY_BOARD_ITEMS: BoardItemProps[] = []
for (let i: number = 0; i < DUMMY_COUNT; ++i) {
  const reverse_index = DUMMY_COUNT - i;
  const created_at = Date.now() - (i * 8000000);
  //console.log(`${i} ${new Date(created_at)}`)
  DUMMY_BOARD_ITEMS.push({
    id: reverse_index,
    title: `테스트${i}`,
    author: `${i}`,
    created_at: created_at,
    view_count: Math.floor(Math.random() * 50),
    comment_count: Math.floor(Math.random() * 50),
    like_count: Math.floor(Math.random() * 50),
  })
}

let DUMMY_BOARD_CONTENTS_LIST: string[] = []
for (let i: number = 0; i < DUMMY_COUNT; ++i) {
  DUMMY_BOARD_CONTENTS_LIST.push(`컨텐츠 ${i}`)
}

let commentIndex = 0;
// key: board_id
let DUMMY_BOARD_COMMMENT_LIST: Map<number, CommentProps[]> = new Map<number, CommentProps[]>()
for (let i: number = 0; i < DUMMY_COUNT; ++i) {
  const commentCount: number = Math.floor(Math.random() * 10)
  DUMMY_BOARD_COMMMENT_LIST.set(i, [])
  for (let j: number = 0; j < commentCount; ++j) {
    DUMMY_BOARD_COMMMENT_LIST.get(i)?.push({
      id: ++commentIndex,
      author: `${i + j}`,
      contents: `댓글 ${j}`,
      created_at: Date.now(),
    })
  }
}

export let getDummyBoardListResponse = (page: number): BoardListResponse => {
  const pageStart = (page - 1) * PAGE_COUNT
  return {
    items: DUMMY_BOARD_ITEMS.slice(pageStart, pageStart + PAGE_COUNT),
    all_count: DUMMY_BOARD_ITEMS.length,
  };
}

export let getDummyBoardContentsResponse = (id: number) => {
  return DUMMY_BOARD_CONTENTS_LIST[id];
}

export let getDummyBoardCommentsResponse = (board_id: number): CommentProps[] | undefined => {
  return DUMMY_BOARD_COMMMENT_LIST.get(board_id)
}