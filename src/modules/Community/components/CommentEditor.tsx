import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from "@mui/material";
import type { CommentEditInfo } from '../types/BoardTypes';



interface CommentEditorProps {
    onEditComment: (commentInfo: CommentEditInfo) => void
};


const CommentEditor = (commentEditorProps: CommentEditorProps) => {
    const [commentInfo, setCommentInfo] = useState<CommentEditInfo>({ author: "test", contents: "", password: "1234" })
    const handleSubmit = () => {
        if (commentInfo.contents.trim()) {
            commentEditorProps.onEditComment(commentInfo);
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
                rows={4}
                variant="outlined"
                placeholder="댓글을 입력하세요"
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
