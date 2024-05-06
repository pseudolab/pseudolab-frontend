// import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./modules/Header/Header.tsx";
import Home from "./modules/Home/Home.tsx";
import Footer from "./modules/Footer/Footer.tsx";
import Bingo from "./modules/Bingo/index.tsx";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CssBaseline />
        <Container className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/builder" element={<Test />} />
            <Route path="/runner" element={<Test />} />
            <Route path="/community" element={<Game />} />
            <Route path="/Bingo" element={<Bingo />} />
            {/* <Route path="/posts" component={Posts} />
            <Route path="/posts/:id" component={Post} />
            <Route path="/posts/new" component={NewPost} />
            <Route path="/posts/edit/:id" component={EditPost} />
            <Route path="/posts/delete/:id" component={DeletePost} />
            <Route path="/posts/search/:query" component={Search} />
            <Route path="/posts/search/:query/:page" component={Search} /> */}
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

function Test() {
  return <div>Test</div>;
}

function Game() {
  return <div>Game</div>;
}

export default App;
