import { Dispatch, SetStateAction } from "react";

import { Container, Input, Button, FormControl } from "@mui/material";
import { styled } from "@mui/system";
import LongTextBox from "./components/LongTextBox.tsx";
import SqaureTextBox from "./components/SqaureTextBox.tsx";
import SelectBox from "./components/SelectBox.tsx";

const options = [
  "기술 블로그 운영자",
  "Linkedin 사용자",
  "데이터 분석가/과학자",
  "PM/PO",
  "8기 스터디 참여자",
  "인과추론 번역서 독자",
  "A/B 테스트 경험자",
  "제품 개선 경험자",
  "인과추론팀 깃헙 팔로워",
  "대시보드 만들어본 사람",
  "통계/경제 전공자",
  "오픈소스 기여자",
  "SQL 사용자",
  "데이터 컨퍼런스 참가경험",
  "인과추론 연구자",
  "CHATGPT 사용자",
  "OP.GG 써본 사람",
  "배그 해본 사람",
  "게임이 취미인 사람",
  "MBTI E인 사람",
  "반려동물 키우는 사람",
  "아이폰 쓰는 사람",
  "넷플릭스 구독자",
  "오늘 저녁 약속있는 사람",
  "KPOP 좋아하는 사람",
];

const Wrapper = styled(Container)({
  marginTop: "4rem",
  height: "100%"
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
  aspectRatio: "1/1",
});

const InputBox = styled(Input)({
  marginTop: "1rem",
});

type WordChangeHandlers = {
  setMyWord1: Dispatch<SetStateAction<string>>;
  setMyWord2: Dispatch<SetStateAction<string>>;
  setMyWord3: Dispatch<SetStateAction<string>>;
};

type BingoPresenterProps = {
  bingoWords: { value: string; status: number }[];
  userSelectedWords: string[];
  myID: string;
  opponentID: string;
  myWord1: string;
  myWord2: string;
  myWord3: string;
  handleWordChange: WordChangeHandlers;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMyIDChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRefreshBingoWords: () => void;
  onClickSendWords: (opponentID: string) => void;
  onClickButton: () => void;
};

const BingoPresenter = (props: BingoPresenterProps) => {
  return (
    <>
      {props.userSelectedWords.length === 0 ? (
        <Wrapper>
            <InputBox
              placeholder="나의 이름을 입력"
              value={props.myID}
              onChange={props.handleMyIDChange}
            ></InputBox>
          <SelectBox
            label="첫 번째 단어"
            value={props.myWord1}
            onChange={(event) =>
              props.handleWordChange.setMyWord1(event.target.value)
            }
            options={options}
          />
          <SelectBox
            label="두 번째 단어"
            value={props.myWord2}
            onChange={(event) =>
              props.handleWordChange.setMyWord2(event.target.value)
            }
            options={options}
          />
          <SelectBox
            label="세 번째 단어"
            value={props.myWord3}
            onChange={(event) =>
              props.handleWordChange.setMyWord3(event.target.value)
            }
            options={options}
          />
          <Button
            onClick={async() => {
              await props.onClickButton();
              window.location.reload();
            }}
          >
            단어 선택 완료
          </Button>
        </Wrapper>
      ) : (
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
            <InputBox
              placeholder="상대방의 ID를 입력"
              value={props.opponentID}
              onChange={props.handleInputChange}
            ></InputBox>
            <Button onClick={() => props.onClickSendWords(props.opponentID)}>
              내 단어 보내기
            </Button>
            <Button onClick={props.onRefreshBingoWords}>내 빙고판 갱신</Button>
          </FormControl>
        </Wrapper>
      )}
    </>
  );
};

export default BingoPresenter;
