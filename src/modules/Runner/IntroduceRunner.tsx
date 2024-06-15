import { Container, Typography, Theme, Button } from "@mui/material";
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
  margin: (theme: Theme) => theme.spacing(4),
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

const IntroduceRunner = () => {
  return (
    <MainContainer>
      <ImageContainer>
        <IntroduceBanner maxWidth="100%" width="100%" height="auto" />
      </ImageContainer>
      <Title>가짜연구소 러너 8기 모집 </Title>
      <Description>
        <b>[안내]</b>
        <p>
          가짜연구소의 아카데미에서는 이론적 지식을 습득하고, 다양한 실험 및
          연구도 진행하며, 리뷰와 토론을 통해 학문적, 경험적 성장을 이루는
          아카데미를 운영하고 있습니다. 아카데미는 스터디, 펠로우쉽, 오픈랩,
          리서치로 구성되어 있습니다. 청강이 가능한 스터디는 누구나 참여하실 수
          있으니, 하반기 동안 지속적으로는 참여하기 어려운 상황이시라면
          가짜연구소 디스코드의 #가짜연-청강 채널을 눈여겨봐주세요!
          <br />
          <br />
          실력이 출중한 분이 필요하기 보다는, 팀원들과 함께 시너지를 내며
          목표까지 완주하는 것이 중요합니다! 그간의 경험을 살펴보면, 다양한
          사람들이 팀원으로 함께하며 서로 부족한 부분을 채워주더라구요! 따라서,
          함께 성장할 의지만 있다면, 가짜연구소의 공유, 동기부여, 함꼐하는
          즐거움과 함께 고속 성장을 하실 수 있습니다!
          <br />
          <br />
          *모집 기간: 12월 12일(화)~27일(수) <br />
          *모집 부문: <br />
          1) 스터디: 단순한 스터디 그룹을 넘어, 공유와 기여를 통해 한층 더
          성장할 기회가 있는 가짜연구소의 스터디 그룹입니다! <br />
          *지원 자격: <br /> - 머신러닝에 관심이 있고, 책임감 있게 팀과 공동체를
          이끌며 함께 성장하고 싶은 누구나 <br />
          *활동 기간: 8기, 2023년 상반기 (팀별로 상이함으로 팀별 계획표를 참조)
          <br />
          *선정 결과 발표: 12월 29일(금), 메일을 통해 안내 (스팸 메일함 확인
          필요)
          <br />
          *조정 기간: 12월 29일(금)~ 1월 6일(토)
          <br />
          가짜연구소 소개: https://pseudo-lab.com/
          <br />
          팀별 계획표: https://pseudo-lab.com/d16a59aa6f3847a092f8d55b89279b0a
          <br />
          가짜연구소 디스코드: https://discord.gg/EPurkHVtp2
          <br />
        </p>
      </Description>
      <Button
        sx={{
          width: "100%",
          height: "50px",
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
        }}
        variant="contained"
        color="primary"
        href="/runner/apply"
      >
        러너 지원하러 가기
      </Button>
    </MainContainer>
  );
};

export default IntroduceRunner;
