import { Container, Input, Button, FormControl } from "@mui/material";
import { styled } from "@mui/system";
import LongTextBox from "./components/LongTextBox.tsx";
import SqaureTextBox from "./components/SqaureTextBox.tsx";

const Wrapper = styled(Container)({
    marginTop: "4rem",
});

const MyInfo = styled(Container)({
    marginTop: "1rem",
});

const BingoContainer = styled(Container)({
    marginTop: "2rem",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(5, 1fr)",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: "1/1"
});

const InputBox = styled(Input)({
    marginTop: "1rem",
});

type BingoPresenterProps = {
    bingoWords: { value: string; status: number }[];
    userSelectedWords: string[];
    myID: string;
};

const BingoPresenter = (props: BingoPresenterProps) => {
    return (
        <div>
            <Wrapper>
                <MyInfo>My Id: {props.myID}</MyInfo>
                {props.userSelectedWords.map((word) => (
                    <LongTextBox key={word} text={word} />
                ))}
                <BingoContainer>
                    {props.bingoWords.map(({ value, status }) => (
                        <SqaureTextBox key={value} value={value} status={status} />
                    ))}
                </BingoContainer>
                <FormControl>
                    <InputBox placeholder="상대방의 ID를 입력"></InputBox>
                    <Button>내 단어 보내기</Button>
                </FormControl>
            </Wrapper>
        </div>
    );
};

export default BingoPresenter;
