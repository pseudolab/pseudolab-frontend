import BoardEditor from "./components/BoardEditor"
import { Box, Typography } from "@mui/material";

const BoardEditView = () => {
    return (
        <Box>
            <Typography variant="h6">발표자에게 질문 또는 자유롭게 PseudoCon 내에서 이야기를 나눠요</Typography>
            <BoardEditor />
        </Box>
    );
}

export default BoardEditView;