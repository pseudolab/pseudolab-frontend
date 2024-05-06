import { Dispatch, SetStateAction } from "react";

import { Container, Input, Button, FormControl } from "@mui/material";
import { styled } from "@mui/system";
import LongTextBox from "./components/LongTextBox.tsx";
import SqaureTextBox from "./components/SqaureTextBox.tsx";
import SelectBox from "./components/SelectBox.tsx";

const options = [
  "AI 스타트업 재직자",
  "AI 아티스트",
  "AI 뉴스레터 구독자",
  "AI 유튜브 채널 구독자",
  "프론트엔드, 백엔드 엔지니어",
  "오픈소스 기여자",
  "SNS 사용자",
  "직전 경력 특이한",
  "AI 모델 배포 경험자",
  "기술 블로그 운영자",
  "해외 컨퍼런스 참가경험",
  "귀여운 IT 굿즈 받아본자",
  "Welcome to PseudoCon",
  "부트캠프 참가경험",
  "AI 관련 해커톤 경험자",
  "올해를 알차게 보낸자",
  "AI 윤리/정책 연구자",
  "로봇/드론 관련 연구자",
  "내 MBTI 설명 가능한자",
  "VR/AR 헤드셋 보유자",
  "Kaggle 또는 Dacon 우승자",
  "멀티모달 관련 연구자",
  "특별한 경험을 가진자",
  "DevOps, MLOps, SRE",
  "이전 기수 참가자",
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
              placeholder="나의 ID를 입력"
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
            onClick={() => {
              props.onClickButton();
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
