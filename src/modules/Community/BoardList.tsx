import { Box, IconButton, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";


const BoardList = () => {
    // Query Param 으로 API 호출하여 게시판 리스트 가져옴.
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    console.log(query);

    return (
        <Box>
            {query}
        </Box>
    );
};

export default BoardList;
