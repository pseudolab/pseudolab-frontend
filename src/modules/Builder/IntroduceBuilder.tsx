import { Container, Typography, Theme } from "@mui/material";
import PseudoLabLogo from "../../components/common/PseudoLabLogo";
import IntroduceBanner from "./component/IntroduceBanner";
import { styled } from "@mui/system";

const ImageContainer = styled(Container)({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
});

const MainContainer = styled(Container)({
  textAlign: "center",
  padding: (theme: Theme) => theme.spacing(4),
//   margin: (theme: Theme) => theme.spacing(4),
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

const IntroduceBuilder = () => {
  return (
    <MainContainer>
      <ImageContainer>
        <IntroduceBanner maxWidth="100%" width="100%" height="auto" />
      </ImageContainer>
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
    </MainContainer>
  );
};

export default IntroduceBuilder;
