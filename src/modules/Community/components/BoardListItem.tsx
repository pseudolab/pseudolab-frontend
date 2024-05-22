import { Box, IconButton, Typography } from "@mui/material";
import { VisibilityOutlined, ChatBubbleOutlineOutlined, FavoriteBorderOutlined } from "@mui/icons-material";
import { useState } from "react";

interface BoardListItemProps {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    title: string;
    viewCount: Number;
    commentCount: Number;
    likeCount: Number;
}

const BoardListItem = (itemProps: BoardListItemProps) => {
    const title = itemProps.title;
    const viewCount = itemProps.viewCount;
    const commentCount = itemProps.commentCount;
    const likeCount = itemProps.likeCount;

    return (
        <Box>

        </Box>
    );
};

export default BoardListItem;
