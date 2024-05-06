import { Container, Typography, Theme } from "@mui/material";
import { styled } from "@mui/system";

const Wrapper = styled("div")<SquareTextProps>(({ status }) => ({
    border: "1px solid black",
    borderRadius: "3px",
    margin: "2px",
    backgroundColor: "#E2E7F0",
    fontSize: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: `${status === 1 ? "red" : "black"}`,
    height: "60px",
    width: "60px",
    '@media (min-width: 768px)': {  // PC 화면 사이즈를 768px 이상으로 가정
        width: "200px",  // PC에서 사용할 너비
        height: "200px",  // PC에서 사용할 높이
        fontSize: "24px",
      }
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
