import { styled } from "@mui/material";
import { Container } from "@mui/material";

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

// Container Props
type FaustPresenterProps = {
  keywordList: string[];
  selectedKeywords: string[];
  handleKeywordClick: (keyword: string) => void;
};

const FaustPresenter = (props: FaustPresenterProps) => {
  return (
    <>
      <Wrapper>
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
      </Wrapper>
    </>
  );
};

export default FaustPresenter;
