// BuilderRules.tsx
import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const AgreeDatasetUsage: React.FC = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          데이터셋 활용 동의
        </Typography>
        <Typography variant="body1" gutterBottom>
          Kaggle에서는 2018년부터 매년 DS & ML Survey를 진행하고, 이를
          데이터셋으로 구축하여 공개하고 있습니다. 학계/업계에 대한 의미 있는
          통찰력을 가질 수 있는 기회로, 가짜연구소에서도 유사하게 진행하고자
          합니다. 여러분들이 입력해주신 정보와 출결 정보에서 개인정보를
          제거하고, 데이터셋으로 만들어 비영리적으로 공개하고자 합니다. 혹시
          동의하시나요?
        </Typography>

        <Typography variant="body1" gutterBottom>
          활용가치 예시: 타이타닉 생존자 예측 문제에서 아이디어를 얻어,
          가짜연구소 생존자(=완주자) 예측
        </Typography>

        <Typography variant="body1" gutterBottom>
          ※ 동의하지 않으시면 사용 및 공개하지 않을 예정이며, 동의 여부 정보가
          선정과정에서 빌더에게 전달되지 않기에 러너 선정에 어떠한 영향도 미치지
          않습니다
        </Typography>
      </Box>
    </Container>
  );
};

export default AgreeDatasetUsage;
