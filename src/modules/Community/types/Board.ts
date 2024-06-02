export interface BoardItemProps {
  id: number;
  title: string;
  author: string;
  created_at: number;
  view_count: number;
  comment_count: number;
  like_count: number;
}

export interface BoardListProp {
  items: BoardItemProps[];
}

export interface BoardListResponse {
  items: BoardItemProps[];
  all_count: number;
}
