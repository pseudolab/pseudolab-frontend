import { Container, Box, Typography, Divider } from '@mui/material';
import { useState } from "react";
import type { BoardItemProps, CommentProps } from './types/BoardTypes';
import { useLocation } from 'react-router-dom';
import { getDummyBoardCommentsResponse, getDummyBoardContentsResponse } from './DummyData';
import CommentList from './components/CommentList';
import CommentEditor from './components/CommentEditor';

const BoardView = () => {
    const { state } = useLocation()
    const itemProps: BoardItemProps = state;
    const contents = getDummyBoardContentsResponse(itemProps.id);
    const commentList: CommentProps[] = getDummyBoardCommentsResponse(itemProps.id);
    const [comments, setComments] = useState(commentList || []);
    const handleEditComment = (author: string, contents: string, password: string) => {
        const board_id = itemProps.id;
        // board_id로 댓글 생성 후 성공하면 돌아오는 데이터로 아래 내용 채우기.
        // password는 서버로 쏘기만
        const newComment = {
            id: 0,
            author: author,
            contents: contents,
            created_at: Date.now()
        };
        setComments([...comments, newComment]);
    };

    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h4" gutterBottom>
                    {itemProps.title}
                </Typography>
                <Box my={2}>
                    <Typography variant="body1" gutterBottom>
                        {contents}
                    </Typography>
                </Box>
                <Divider />
                <CommentEditor onEditComment={handleEditComment} />
                <Divider />
                <CommentList items={commentList} />
            </Box>
        </Container>
    );
};

export default BoardView;