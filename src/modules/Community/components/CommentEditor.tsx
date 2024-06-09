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
            <Box display="flex" justifyContent="space-between">
                <TextField
                    required
                    id="outlined-required-author"
                    name="author"
                    label="닉네임"
                    placeholder="닉네임을 입력해 주세요"
                    value={commentInfo.author}
                    onChange={(e) => setCommentInfo({ ...commentInfo, author: e.target.value })}

                />
                <TextField
                    required
                    id="outlined-required-password"
                    name="password"
                    type="password"
                    label="비밀번호"
                    placeholder="비밀번호를 4자리를 입력해 주세요."
                    value={commentInfo.password}
                    onChange={(e) => setCommentInfo({ ...commentInfo, password: e.target.value })}
                    inputProps={{
                        maxLength: 4, // 최대 길이 4자로 설정
                    }}
                />
            </Box>
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
