import { Box, Button } from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";
import BoardList from "./components/BoardList";
import type { BoardListResponse } from "./types/BoardTypes";
import { getDummyBoardListResponse } from "./DummyData";

const BoardContainer = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  console.log("보드 그리기");
  const pageParam = searchParams.get("page");
  const page = (pageParam === null) ? 1 : parseInt(pageParam);
  // let count = searchParams.get("count"); // 50개로 강제 설정.
  const boardListResponse: BoardListResponse = getDummyBoardListResponse(page)

  const handlePageChange = (pageNum: number) => {
    navigate(`?page=${pageNum}`);
  };
  const totalPages = boardListResponse.all_count / 50;
  const renderPageButtons = (currentPage: number) => {
    const maxVisiblePages = 5; // 한 번에 보일 페이지 버튼 수
    let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    let pageButtons = [];

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <Button
          key={i}
          variant={i === currentPage ? "contained" : "outlined"}
          onClick={() => handlePageChange(i)}
          style={{ margin: '0 0.1rem', minWidth: '4vw', maxWidth: '4vw', }}
        >
          {i}
        </Button >
      );
    }

    return pageButtons;
  };

  return (
    <Box>
      <BoardList items={boardListResponse.items}></BoardList>
      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        <Button variant="contained" onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>
          이전
        </Button>
        <Box display="flex" alignItems="center" mx={2}>
          {renderPageButtons(page)}
        </Box>
        <Button variant="contained" onClick={() => handlePageChange(page + 1)} disabled={page >= totalPages}>
          다음
        </Button>
      </Box>
    </Box>
  );
};

export default BoardContainer;
