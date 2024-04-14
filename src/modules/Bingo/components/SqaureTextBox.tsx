import { Container, Typography, Theme } from "@mui/material";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
    border: "1px solid black",
    borderRadius: "3px",
    margin: "0.3rem",
    backgroundColor: "#E2E7F0",
    width: "100%",
    aspectRatio: "1/1",
    fontSize: "0.8rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
});


type SquareTextProps = {
    text: string;
};

const SquareTextBox = (props: SquareTextProps) => {
    return (
        <Wrapper>{props.text}</Wrapper>
        );
};

export default SquareTextBox;
