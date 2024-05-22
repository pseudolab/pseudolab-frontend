import { Box, IconButton, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";


const BoardList = () => {
    // Query Param 으로 API 호출하여 게시판 리스트 가져옴.
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page');
    const count = searchParams.get('count');


    return (
        <Box>
        </Box>
    );
};

export default BoardList;
