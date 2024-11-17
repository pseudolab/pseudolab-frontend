import MainBanner from "./components/MainBanner";
import { Container, Typography, Theme, Input, Button } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import PseudoLabLogo from "../../components/common/PseudoLabLogo";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)({
  textAlign: "center",
  padding: (theme: Theme) => theme.spacing(4),
});

const Title = styled(Typography)({
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: (theme: Theme) => theme.spacing(2),
  color: (theme: Theme) => theme.palette.primary.main,
});

const Description = styled(Typography)({
  fontSize: "1.2rem",
  marginBottom: (theme: Theme) => theme.spacing(4),
});

const InputBox = styled(Input)({
  marginTop: "1rem",
});

const Home = () => {
  let loginId = "";
  let password = "";
  const handLogin = () => {
    console.log(loginId);
    console.log(password);
  };

  return (
    <StyledContainer>
      <Typography
        sx={{
          whiteSpace: "pre-wrap",
          fontSize: "5vw",
          textAlign: "left",
          fontFamily: "Spoqa Han Sans Neo",
          fontWeight: "bold",
        }}
      >
        빙고 네트워킹
      </Typography>

      <Typography
        sx={{
          whiteSpace: "pre-wrap",
          fontSize: "4vw",
          textAlign: "left",
          fontFamily: "Spoqa Han Sans Neo",
          fontWeight: "bold",
        }}
      >
        Sudo Pseudo Explore
      </Typography>

      <Typography
        sx={{
          whiteSpace: "pre-wrap",
          fontSize: "3.5vw",
          textAlign: "left",
          fontFamily: "Spoqa Han Sans Neo",
          fontWeight: "bold",
        }}
      >
        1st Grand Gathering
      </Typography>

      <Typography
        sx={{
          whiteSpace: "pre-wrap",
          fontSize: "3vw",
          textAlign: "left",
          fontFamily: "Spoqa Han Sans Neo",
          fontWeight: "bold",
        }}
      >
        2024.11.23
      </Typography>

      <br />

      <InputBox
        placeholder="아이디 입력"
        value={loginId}
        onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
          loginId = event.target.value;
        }}
      ></InputBox>

      <InputBox
        placeholder="비밀번호 입력"
        value={password}
        onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
          password = event.target.value;
        }}
      ></InputBox>
      <br />
      <br />
      <Button
        onClick={async () => {
          if (loginId === "") {
            toast.error("아이디를 입력해주세요.");
            return;
          } else if (password === "") {
            toast.error("비밀번호를 입력해주세요.");
            return;
          } else {
            await handLogin();
          }
        }}
      >
        계정 생성 or 로그인
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
    </StyledContainer>
  );
};

export default Home;
