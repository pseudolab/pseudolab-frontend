import MainBanner from "./components/MainBanner";
import { Container, Typography, Theme, Box } from "@mui/material";
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

// const StyledButton = styled(Button)({
//   marginTop: (theme: Theme) => theme.spacing(2),
//   padding: (theme: Theme) => theme.spacing(1.5, 4),
//   fontSize: '1rem',
// });

const Home = () => {
  return (
    <StyledContainer>
      <MainBanner />
      <Typography sx={{ whiteSpace: "pre-wrap", fontSize: "8vw", textAlign: "left", fontFamily: "Spoqa Han Sans Neo", fontWeight: "bold" }}>
        8th PseudoCon
      </Typography>

      <Typography sx={{ whiteSpace: "pre-wrap", fontSize: "3vw", textAlign: "left", fontFamily: "Spoqa Han Sans Neo", fontWeight: "bold" }}>
        2024.6.15
      </Typography>

      <Typography sx={{ whiteSpace: "pre-wrap", fontSize: "5vw", textAlign: "left", fontFamily: "Spoqa Han Sans Neo", fontWeight: "bold" }}>
        가짜연구소의 8번째 컨퍼런스
      </Typography>

      <Typography sx={{ whiteSpace: "pre-wrap", fontSize: "4vw", textAlign: "left", fontFamily: "Spoqa Han Sans Neo", fontWeight: "bold" }}>
        "AI 파도속에서 나만의 북극성 찾기"
      </Typography>

      <PseudoLabLogo maxWidth="20rem" height="auto" marginRight="auto" />
      <Title>가짜연구소 (Pseudo Lab)</Title>
      <Description>
        <b>가짜연구소</b>는
        <span style={{ color: "#d9730d", fontWeight: "bold" }}>
          머신러닝/데이터사이언스
        </span>
        를 중심으로 모인{" "}
        <span style={{ color: "#d9730d", fontWeight: "bold" }}>
          비영리 커뮤니티
        </span>
        입니다.
        <br />
        <span style={{ color: "#d9730d", fontWeight: "bold" }}>
          성장의 앙상블이 만들어내는 울림
        </span>
        을 통해 개인과 커뮤니티의 성장의 사이클을 함께 만들어나가요!
      </Description>
    </StyledContainer >
  );
};

export default Home;
