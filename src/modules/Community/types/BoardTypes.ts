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

export interface CommentListProps {
  items: CommentProps[];
}

export interface CommentProps {
  id: number,
  author: string;
  contents: string,
  created_at: number;
}

export interface CommentEditInfo {
  author: string,
  contents: string,
  password: string,
}

export interface RequestEditComment {
  board_id: number,
  id?: number, // id가 존재하면 Edit, 없으면 추가
  author: string,
  contents: string,
  password: string,
}

export interface RequestDeleteComment {
  board_id: number,
  id: number,
  password: string,
}

export interface BoardViewProps extends BoardItemProps {
  contents: string;
  comment_list: CommentProps[],
}

export interface BoardListResponse {
  items: BoardItemProps[];
  all_count: number;
}

export interface BoardResponse {
  id: number,
  contents: string,
  comment_list: CommentProps[],
}