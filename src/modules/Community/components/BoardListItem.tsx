import { Card, CardContent, Box, IconButton, Typography } from "@mui/material";
import {
  VisibilityOutlined,
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import type { BoardItemProps } from "../types/Board";

const BoardListItem = (itemProps: BoardItemProps) => {
  const title = itemProps.title;
  const author = itemProps.author;
  const createdAt: Date = itemProps.createdAt;
  const createdAgoMsg = Date.now() - createdAt;
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
          by {author}
        </Typography>
        <Box></Box>
      </CardContent>
    </Card>
  );
};

export default BoardListItem;
