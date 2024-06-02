import { Card, CardContent, Box, IconButton, Typography } from "@mui/material";
import {
  VisibilityOutlined,
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import type { BoardItemProps } from "../types/BoardTypes";
import type { DateDuration } from "../../../utils/DateUtils";
import { getDiffDuration } from "../../../utils/DateUtils";
import { create } from "@mui/material/styles/createTransitions";

const MONTH_IN_A_YEAR: number = 12;

const BoardListItem = (itemProps: BoardItemProps) => {
  const title = itemProps.title;
  const author = itemProps.author;
  const createdAt: number = itemProps.created_at;

  let createdMessage = "";
  const dateDuration: DateDuration = getDiffDuration(new Date(createdAt), new Date(Date.now()))
  if (dateDuration.years > 0) createdMessage = `${dateDuration.years}년 전`;
  else if (dateDuration.months > 0) createdMessage = `${dateDuration.months}개월 전`;
  else if (dateDuration.days > 0) createdMessage = `${dateDuration.days}일 전`;
  else if (dateDuration.hours > 0) createdMessage = `${dateDuration.hours}시간 전`;
  else if (dateDuration.minutes > 0) createdMessage = `${dateDuration.minutes}분 전`;
  else createdMessage = `${dateDuration.seconds}초 전`;

  const viewCount = itemProps.view_count;
  const commentCount = itemProps.comment_count;
  const likeCount = itemProps.like_count;

  return (
    <Card sx={{ width: "auto", height: "7rem" }}>
      <CardContent>
        <Typography variant="h6" component="div">
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
