import { Card, CardContent, Box, IconButton, Typography } from "@mui/material";
import {
  VisibilityOutlined,
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import type { BoardItemProps } from "../types/Board";

const MONTH_IN_A_YEAR: number = 12;

const BoardListItem = (itemProps: BoardItemProps) => {
  const title = itemProps.title;
  const author = itemProps.author;
  const createdAt: number = itemProps.createdAt;
  const diffMs = Date.now() - createdAt;
  const diffDate = new Date(diffMs);

  let createdMessage = "";
  const diffMonth = diffDate.getMonth();
  const diffYear = Math.floor(diffMonth / MONTH_IN_A_YEAR);
  const diffDay = diffDate.getDay();
  const diffHour = diffDate.getHours();
  const diffMinute = diffDate.getMinutes();
  if (diffYear > 0) createdMessage = `${diffYear}년 전`;
  else if (diffMonth > 0) createdMessage = `${diffMonth}개월 전`;
  else if (diffDay > 0) createdMessage = `${diffDay}일 전`;
  else if (diffHour > 0) createdMessage = `${diffHour}시간 전`;
  else if (diffMinute > 0) createdMessage = `${diffMinute}분 전`;
  else createdMessage = `${diffDate.getSeconds()}초 전`;
  console.log(diffDate.getMonth());
  console.log(diffDate.getDay());

  const viewCount = itemProps.viewCount;
  const commentCount = itemProps.commentCount;
  const likeCount = itemProps.likeCount;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          by {author} {createdMessage}
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <Box display="flex" mr={1}>
            <VisibilityOutlined />
            <Box ml={1}>{viewCount}</Box>
          </Box>

          <Box display="flex" mr={1}>
            <ChatBubbleOutlineOutlined />
            <Box ml={1}>{commentCount}</Box>
          </Box>
          <Box display="flex">
            <FavoriteBorderOutlined />
            <Box ml={1}>{likeCount}</Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BoardListItem;
