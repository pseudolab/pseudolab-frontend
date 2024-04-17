import { Container, Typography, Theme } from "@mui/material";
import { styled } from "@mui/system";

const Wrapper = styled("div")<SquareTextProps>(({ status }) => ({
    border: "1px solid black",
    borderRadius: "3px",
    margin: "2px",
    backgroundColor: "#E2E7F0",
    width: "60px",
    height: "60px",
    // aspectRatio: "1/1",
    fontSize: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: `${status === 1 ? "red" : "black"}`,
}));


type SquareTextProps = {
    value: string;
    status: number;
};

const SquareTextBox = (props: SquareTextProps) => {
    return (
        <Wrapper {...props}>{props.value}</Wrapper>
        );
};

export default SquareTextBox;
