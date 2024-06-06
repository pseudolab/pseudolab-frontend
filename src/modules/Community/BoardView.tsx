import { Container, Box, Typography, TextField, Button, Divider, List, ListItem, ListItemText } from '@mui/material';
import type { BoardItemProps } from './types/BoardTypes';
import { useLocation } from 'react-router-dom';
import { getDummyBoardCommentsResponse, getDummyBoardContentsResponse } from './DummyData';
import CommentList from './components/CommentList';
import CommentEditor from './components/CommentEditor';

const BoardView = () => {
    const { state } = useLocation()
    const itemProps: BoardItemProps = state;
    const contents = getDummyBoardContentsResponse(itemProps.id);
    const commentList: CommentProps[] = getDummyBoardCommentsResponse(itemProps.id);

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
                <CommentEditor onEditComment={undefined} />
                <Divider />
                <CommentList items={commentList} />
            </Box>
        </Container>
    );
};

export default BoardView;