// PrivacyPolicy.tsx
import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, FormControlLabel, Checkbox } from '@mui/material';

const PrivacyPolicy: React.FC = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          개인정보 처리방침
        </Typography>
        <Typography variant="body1" gutterBottom>
          가짜연구소는 「개인정보 보호법」에 따라 여러분의 개인정보를 아래와 같이 수집 및 이용하고자 하며, 법에 따라 수집한 개인정보를 안전하게 보호하겠습니다. 아래의 사항에 대해 충분히 읽어보신 후 동의 여부를 체크해 주시기 바랍니다.
        </Typography>

        <Box my={2}>
          <Typography variant="h6" component="h2" gutterBottom>
            ▶ 개인정보의 수집·이용 목적
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="지원서 등록 및 수정, 합격 여부 확인, 전형 진행기간 지원자와의 원활한 의사소통, 처리결과 회신, 지원이력 관리, 향후 활동 시 인사관리업무 참고 활용" />
            </ListItem>
          </List>
        </Box>

        <Box my={2}>
          <Typography variant="h6" component="h2" gutterBottom>
            ▶ 수집하는 개인정보의 항목
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="필수항목 : 이메일 주소, 이름" />
            </ListItem>
            <ListItem>
              <ListItemText primary="선택항목 : 합격자가 자기소개에 작성한 생년월일, 학력, 자격, 전화번호 등 정보 일체" />
            </ListItem>
          </List>
        </Box>

        <Box my={2}>
          <Typography variant="h6" component="h2" gutterBottom>
            ▶ 개인정보의 보유·이용 기간
          </Typography>
          <Typography variant="body1" gutterBottom>
            가짜연구소 커뮤니티에서는 정보주체의 회원 가입일로부터 서비스를 제공하는 기간 동안에 한하여 가짜연구소 서비스를 이용하기 위한 최소한의 개인정보를 보유 및 이용 하게 됩니다. 회원가입/구글 폼 등을 통해 개인정보의 수집·이용, 제공 등에 대해 동의하신 내용은 언제든지 철회하실 수 있습니다. 회원 탈퇴를 요청하거나 수집/이용목적을 달성하거나 보유/이용기간이 종료한 경우, 사업 폐지 등의 사유발생시 개인 정보를 지체 없이 파기합니다.
          </Typography>
        </Box>

        <Box my={2}>
          <Typography variant="h6" component="h2" gutterBottom>
            ▶ 동의를 거부할 권리 및 동의 거부에 따른 불이익
          </Typography>
          <Typography variant="body1" gutterBottom>
            지원자는 개인정보의 수집, 이용 등과 관련한 위 사항에 대하여 원하지 않는 경우 동의를 거부할 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            다만, 수집하는 개인정보의 항목에서 필수정보에 대한 수집 및 이용에 대하여 동의하지 않는 경우는 지원전형에 제한이 있을 수 있습니다.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
