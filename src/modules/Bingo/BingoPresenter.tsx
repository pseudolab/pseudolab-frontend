import { Dispatch, SetStateAction } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container, Input, Button, FormControl } from "@mui/material";
import { styled } from "@mui/system";
import LongTextBox from "./components/LongTextBox.tsx";
import SqaureTextBox from "./components/SqaureTextBox.tsx";
import SelectBox from "./components/SelectBox.tsx";
import { defafultBingoBoard } from "./components/DefaultBingoBoard.ts";


const careerOptionsArray = defafultBingoBoard.slice(0, 4)
const careerOptions = careerOptionsArray.map(data => data.value)

const positionOptionArray = defafultBingoBoard.slice(4, 10)
const positionOption = positionOptionArray.map(data => data.value)

const pseudolabOptionArray = defafultBingoBoard.slice(10, 14)
const pseudolabOption = pseudolabOptionArray.map(data => data.value)

const talkOptionArray = defafultBingoBoard.slice(14, 20)
const talkOption = talkOptionArray.map(data => data.value)


const Wrapper = styled(Container)({
  width: "60vw",
  height: "100%",
});

const MyInfo = styled(Container)({
  marginTop: "1rem",
});

const BingoContainer = styled(Container)({
  marginTop: "1rem",
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
  aspectRatio: "1/1",
});

const RecentSendUserWrapper = styled(Container)({
  marginTop: "1rem",
  fontSize: "1rem",
});

const RecentSendUser = styled("span")({
  fontWeight: "bold",
  "& span": {
    background: "linear-gradient(to bottom, #ffff99, #ffcc33)",
    backgroundSize: "100% 200%",
    backgroundPosition: "left bottom",
    padding: "0 5px",
    borderRadius: "5px",
  },
});

const InputBox = styled(Input)({
  marginTop: "1rem",
});

type WordChangeHandlers = {
  setMyWord1: Dispatch<SetStateAction<string>>;
  setMyWord2: Dispatch<SetStateAction<string>>;
  setMyWord3: Dispatch<SetStateAction<string>>;
  setMyWord4: Dispatch<SetStateAction<string>>;
};

type BingoPresenterProps = {
  bingoWords: { value: string; status: number }[];
  userSelectedWords: string[];
  myID: string;
  opponentID: string;
  myWord1: string;
  myWord2: string;
  myWord3: string;
  myWord4: string;
  handleWordChange: WordChangeHandlers;
  recentWords: string;
  recentSendUser: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMyIDChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRefreshBingoWords: () => void;
  onClickSendWords: (opponentID: string) => Promise<boolean>;
  onClickButton: () => void;
};

const BingoPresenter = (props: BingoPresenterProps) => {
  return (
    <>
      {props.userSelectedWords.length === 0 ? (
        <Wrapper>
          <InputBox
            placeholder="나의 닉네임을 입력"
            value={props.myID}
            onChange={props.handleMyIDChange}
          ></InputBox>
          <SelectBox
            label="첫 번째 단어 (경력)"
            value={props.myWord1}
            onChange={(event) =>
              props.handleWordChange.setMyWord1(event.target.value)
            }
            options={careerOptions}
          />
          <br />
          <SelectBox
            label="두 번째 단어 (포지션/희망직군)"
            value={props.myWord2}
            onChange={(event) =>
              props.handleWordChange.setMyWord2(event.target.value)
            }
            options={positionOption}
          />
          <br />
          <SelectBox
            label="세 번째 단어 (가짜연구소)"
            value={props.myWord3}
            onChange={(event) =>
              props.handleWordChange.setMyWord3(event.target.value)
            }
            options={pseudolabOption}
          />
          <br />
          <SelectBox
            label="네 번째 단어 (이야기하고 싶은 주제)"
            value={props.myWord4}
            onChange={(event) =>
              props.handleWordChange.setMyWord4(event.target.value)
            }
            options={talkOption}
          />
          <br />
          <Button
            onClick={async () => {
              if (props.myID === "") {
                toast.error("나의 닉네임을 입력해주세요.");
                return;
              }
              if (
                props.myWord1 === "" &&
                props.myWord2 === "" &&
                props.myWord3 === "" &&
                props.myWord4 === ""
              ) {
                toast.error("단어를 선택해주세요.");
                return;
              } else {
                await props.onClickButton();
                window.location.reload();
              }
            }}
          >
            단어 선택 완료
          </Button>
          <ToastContainer
            position="top-right" // 알람 위치 지정
            autoClose={3000} // 자동 off 시간
            hideProgressBar={false} // 진행시간바 숨김
            closeOnClick // 클릭으로 알람 닫기
            rtl={false} // 알림 좌우 반전
            pauseOnFocusLoss // 화면을 벗어나면 알람 정지
            draggable // 드래그 가능
            pauseOnHover // 마우스를 올리면 알람 정지
            theme="light"
          // limit={1} // 알람 개수 제한
          />
        </Wrapper>
      ) : (
        <Wrapper>
          <MyInfo>My Id: {props.myID}</MyInfo>
          {props.userSelectedWords.map((word) => (
            <LongTextBox key={word} text={word} />
          ))}
          <RecentSendUserWrapper>
            {props.recentSendUser === "" ? (
              ""
            ) : (
              <>
                <RecentSendUser>
                  <span>{`${props.recentSendUser}`}</span>
                </RecentSendUser>
                <span> 님과 이야기를 나누었어요!</span>
              </>
            )}
          </RecentSendUserWrapper>
          <BingoContainer>
            {props.bingoWords.map(({ value, status }) => (
              <SqaureTextBox
                key={value}
                value={value}
                status={status}
                recent_list={props.recentWords.split(",")}
              />
            ))}
          </BingoContainer>
          <FormControl>
            <InputBox
              placeholder="상대방의 닉네임 입력"
              value={props.opponentID}
              onChange={props.handleInputChange}
            ></InputBox>
            <Button
              onClick={async () => {
                const res = await props.onClickSendWords(props.opponentID);
                if (res) {
                  toast.success("상호작용에 성공했습니다.");
                }
              }}
            >
              내 단어 보내기
            </Button>
            <ToastContainer
              position="top-right" // 알람 위치 지정
              autoClose={3000} // 자동 off 시간
              hideProgressBar={false} // 진행시간바 숨김
              closeOnClick // 클릭으로 알람 닫기
              rtl={false} // 알림 좌우 반전
              pauseOnFocusLoss // 화면을 벗어나면 알람 정지
              draggable // 드래그 가능
              pauseOnHover // 마우스를 올리면 알람 정지
              theme="light"
            // limit={1} // 알람 개수 제한
            />
            <Button onClick={props.onRefreshBingoWords}>내 빙고판 갱신</Button>
          </FormControl>
        </Wrapper>
      )}
    </>
  );
};

export default BingoPresenter;
