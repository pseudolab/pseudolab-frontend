import { Container, Grid } from "@mui/material";
import type { BoardItemProps, BoardListProp } from "../types/Board";
import BoardListItem from "./BoardListItem";

const BoardList = (itemsProp: BoardListProp) => {
  return (
    <Container>
      <Grid container spacing={2}>
        {itemsProp.items.map((item: BoardItemProps, index: number) => (
          <Grid item xs={24} sm={24} md={24} lg={24} key={index}>
            <BoardListItem {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BoardList;
