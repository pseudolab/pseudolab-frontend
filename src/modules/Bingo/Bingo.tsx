import { Container, Input, FormControl, Button} from "@mui/material";
import LongTextBox from "./components/LongTextBox.tsx"
import SqaureTextBox from "./components/SqaureTextBox.tsx"
import { styled } from "@mui/system";

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
    // grid-template-columns: repeat(5, 1fr), // 5개의 열을 동일한 크기로 나눕니다.
    // grid-template-rows: repeat(5, 1fr), // 5개의 행을 동일한 크기로 나눕니다.
    // gap: 10px, // 셀 사이의 간격을 설정합니다.
    // justify-content: center,
    // align-items: center
    });



const InputBox = styled(Input)({
    marginTop: "1rem",
    });

const WordList = [
  "Word1","Word1","Word1","Word1","Word1",
  "Word1","Word1","Word1","Word1","Word1",
  "Word1","Word1","Word1","Word1","Word1",
  "Word1","Word1","Word1","Word1","Word1",
  "Word1","Word1","Word1","Word1","Word1"
]

// const StyledButton = styled(Button)({
//   marginTop: (theme: Theme) => theme.spacing(2),
//   padding: (theme: Theme) => theme.spacing(1.5, 4),
//   fontSize: '1rem',
// });

const Bingo = () => {
  return (
    <div>
    <Wrapper>
      <MyInfo>My Id: 123</MyInfo>
      <LongTextBox text="Word1" />
      <LongTextBox text="Word2" />
      <LongTextBox text="Word3" />
      <BingoContainer>
        {WordList.map((word) => (
          <SqaureTextBox text={word} />
        ))}
      </BingoContainer>
      <FormControl>
      <InputBox placeholder="상대방의 ID를 입력"></InputBox>
      <Button>빙고체크</Button>
      </FormControl>
    </Wrapper>
    </div>
    );
};

export default Bingo;
