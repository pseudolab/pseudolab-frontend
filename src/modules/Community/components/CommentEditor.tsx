import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from "@mui/material";
import type { CommentEditInfo } from '../types/BoardTypes';



interface CommentEditorProps {
    onEditComment: (commentInfo: CommentEditInfo) => void
};


const DEFAULT_COMMENT_EDIT_INFO: CommentEditInfo = {
    author: "",
    contents: "",
    password: "",
}

const CommentEditor = (commentEditorProps: CommentEditorProps) => {
    const [commentInfo, setCommentInfo] = useState<CommentEditInfo>(DEFAULT_COMMENT_EDIT_INFO)
    const handleSubmit = () => {
        if (commentInfo.contents.trim()) {
            commentEditorProps.onEditComment(commentInfo);
            setCommentInfo(DEFAULT_COMMENT_EDIT_INFO)
        }
    };

    return (
        <Box my={4}>
            <Typography variant="h6" gutterBottom>
                댓글 작성
            </Typography>
            <TextField
                fullWidth
                multiline
                rows={2}
                variant="outlined"
                placeholder="댓글을 입력하세요"
                value={commentInfo.contents}
                onChange={(e) => setCommentInfo({ ...commentInfo, contents: e.target.value })}
            />
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    댓글 등록
                </Button>
            </Box>
        </Box>
    );
};

export default CommentEditor;
