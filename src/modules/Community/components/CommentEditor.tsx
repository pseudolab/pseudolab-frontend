import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from "@mui/material";

interface CommentEditorProps {
    onEditComment: (author: string, contents: string, password: string) => void
};

const CommentEditor = (commentEditorProps: CommentEditorProps) => {
    const [content, setContent] = useState<string>('');
    const handleSubmit = () => {
        if (content.trim()) {
            commentEditorProps.onEditComment(content);
            window.location.reload()
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
                onChange={(e) => setContent(e.target.value)}
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
