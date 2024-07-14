import { styled } from "@mui/material";
import { Container, Input } from "@mui/material";

const Wrapper = styled(Container)({
  width: "60vw",
  height: "100%",
});

const KeywordContainer = styled(Container)({
  marginTop: "1rem",
  display: "grid",
  gridTemplateRows: "repeat(9, 1fr)",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
  aspectRatio: "1/1",
});

const Keyword = styled(Container)<{ isSelected: boolean }>((props) => ({
  background: props.isSelected
    ? "linear-gradient(to bottom, #99ff99, #33cc33)"
    : "linear-gradient(to bottom, #ffff99, #ffcc33)",
  backgroundSize: "100% 200%",
  backgroundPosition: "left bottom",
  padding: "0 5px",
  borderRadius: "5px",
  "&:first-letter": {
    fontWeight: "bold",
  },
}));

const MyButton = styled(Container)({
  marginTop: "1rem",
  width: "100%",
  height: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#ffcc33",
  borderRadius: "5px",
});

const InputContainer = styled(Container)({
  marginTop: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const InputBox = styled(Input)({
  marginTop: "5rem",
});

// Container Props
type FaustPresenterProps = {
  keywordList: string[];
  selectedKeywords: string[];
  isClicked: boolean;
  sentenceId: string;
  handleKeywordClick: (keyword: string) => void;
  handleNextButtonClick: () => void;
  handleSentenceIDChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRegisterSentence: () => void;
};

const FaustPresenter = (props: FaustPresenterProps) => {
  return (
    <>
      <Wrapper>
        {props.isClicked ? (
          <>
            <InputBox
              placeholder="단어 ID 입력"
              value={props.sentenceId}
              onChange={props.handleSentenceIDChange}
            ></InputBox>
            <MyButton onClick={props.handleRegisterSentence}>등록</MyButton>
          </>
        ) : (
          <>
            <KeywordContainer>
              {props.keywordList.map((keyword, index) => (
                <Keyword
                  key={index}
                  isSelected={props.selectedKeywords.includes(keyword)}
                  onClick={() => props.handleKeywordClick(keyword)}
                >
                  {keyword}
                </Keyword>
              ))}
            </KeywordContainer>
            <MyButton onClick={props.handleNextButtonClick}>다음</MyButton>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default FaustPresenter;
