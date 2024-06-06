import { Container, Box, Typography, TextField, Button, Divider, List, ListItem, ListItemText } from '@mui/material';
import type { BoardItemProps } from './types/BoardTypes';
import { useLocation } from 'react-router-dom';
import { getDummyBoardContentsResponse } from './DummyData';

const BoardView = () => {
    const { state } = useLocation()
    const itemProps: BoardItemProps = state;
    const contents = getDummyBoardContentsResponse(itemProps.id);

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
                    />
                    <Box mt={2}>
                        <Button variant="contained" color="primary">
                            댓글 등록
                        </Button>
                    </Box>
                </Box>
                <Divider />
                <Box my={4}>
                    <List>
                        <ListItem>
                            <ListItemText primary="댓글 내용 1" secondary="작성자 1" />
                        </ListItem>
                        <Divider component="li" />
                        <ListItem>
                            <ListItemText primary="댓글 내용 2" secondary="작성자 2" />
                        </ListItem>
                    </List>
                </Box>

            </Box>
        </Container>
    );
};

export default BoardView;