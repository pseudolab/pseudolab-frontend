
import { Routes, Route } from "react-router-dom";
import BoardListView from "./BoardListView";
import BoardView from "./BoardView";


const BoardContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<BoardListView />} />
      <Route path=":idx" element={<BoardView />} />
    </Routes>
  );
};

export default BoardContainer;
