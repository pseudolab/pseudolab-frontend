import type { BoardItemProps, BoardListResponse } from "./types/Board";

const DUMMY_COUNT: number = 1000;
const PAGE_COUNT: number = 50;

let DUMMY_BOARD_ITEMS: BoardItemProps[] = []
for (let i: number = 0; i < DUMMY_COUNT; ++i) {
  const reverse_index = DUMMY_COUNT - i;
  const created_at = Date.now() - i * 10000;
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