import { Container, Grid } from "@mui/material";
import type { BoardItemProps, BoardItemListProp } from "../types/Board";
import BoardListItem from "./BoardListItem";

const BoardList = (itemsProp: BoardItemListProp) => {
  return (
    <Container>
      <Grid container spacing={2}>
        {itemsProp.items.map((item: BoardItemProps, index: number) => (
          <Grid item xs={12} key={index}>
            <BoardListItem {...item} />
            {console.log(`Index: ${index}`)}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BoardList;
