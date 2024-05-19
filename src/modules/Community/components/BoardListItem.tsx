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

const BoardListItem = (boardListItemProps: BoardListItemProps) => {



    return (
        <Box>

        </Box>
    );
};

export default BoardListItem;
