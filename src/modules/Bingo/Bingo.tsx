import { Container, Input, FormControl, Button} from "@mui/material";
import LongTextBox from "./components/LongTextBox.tsx"
import SqaureTextBox from "./components/SqaureTextBox.tsx"
import { styled } from "@mui/system";

import { getMyBingo, getSelectedWords } from "../../api/api.ts"

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

const MyID = "1"
const BingoWords = await getMyBingo(MyID)
const UserSelectedWords = await getSelectedWords(MyID)


const Bingo = () => {
  return (
    <div>
    <Wrapper>
      <MyInfo>My Id: {MyID}</MyInfo>
      {UserSelectedWords.map((word: string) => (
          <LongTextBox text={word} />
      ))
      }
      <BingoContainer>
        {BingoWords.map(({value, status}: {value: string, status: number}) => (
          <SqaureTextBox value={value} status={status} />
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
