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
