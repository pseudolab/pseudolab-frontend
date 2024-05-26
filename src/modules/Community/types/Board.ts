export interface BoardItemProps {
  title: string;
  author: string;
  createdAt: number;
  viewCount: number;
  commentCount: number;
  likeCount: number;
}

export interface BoardItemListProp {
  items: BoardItemProps[];
}
