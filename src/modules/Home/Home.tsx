import MainBanner from "./components/MainBanner";
import { Container, Typography, Theme, Input } from "@mui/material";
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
  let loginId = ""
  let password = ""
  const handLogin = () => {

  }

  return (
    <StyledContainer>
      <Typography sx={{ whiteSpace: "pre-wrap", fontSize: "5vw", textAlign: "left", fontFamily: "Spoqa Han Sans Neo", fontWeight: "bold" }}>
        빙고 네트워킹
      </Typography>

      <Typography sx={{ whiteSpace: "pre-wrap", fontSize: "4vw", textAlign: "left", fontFamily: "Spoqa Han Sans Neo", fontWeight: "bold" }}>
        Sudo Pseudo Explore
      </Typography>

      <Typography sx={{ whiteSpace: "pre-wrap", fontSize: "3.5vw", textAlign: "left", fontFamily: "Spoqa Han Sans Neo", fontWeight: "bold" }}>
        1st Grand Gathering
      </Typography>

      <Typography sx={{ whiteSpace: "pre-wrap", fontSize: "3vw", textAlign: "left", fontFamily: "Spoqa Han Sans Neo", fontWeight: "bold" }}>
        2024.11.23
      </Typography>

      <InputBox
        placeholder="아이디 입력"
        value={loginId}
        onChange={handLogin}
      ></InputBox>

      <InputBox
        placeholder="비밀번호 입력"
        value={password}
        onChange={handLogin}
      ></InputBox>

    </StyledContainer >
  );
};

export default Home;
