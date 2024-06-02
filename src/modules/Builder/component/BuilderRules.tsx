// BuilderRules.tsx
import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const BuilderRules: React.FC = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          가짜연구소 빌더(운영진) 활동 규칙
        </Typography>
        <Typography variant="body1" gutterBottom>
          가짜연구소에서는 빌더(운영진)이 프로젝트를 원활히 진행할 수 있도록 규칙과 도구, 그리고 도우미가 있습니다. 가짜연구소 커뮤니티와 빌더, 그리고 참여하는 러너까지 귀중한 시간을 낸 만큼! 원하는 바 모두 이루실 수 있기를 바라며 규칙을 만들었습니다. 물론 언제나 예외상황은 존재하겠지만, 가짜연구소 방식의 성장에 동참해주시면 감사드리겠습니다!
        </Typography>

        <Box my={2}>
          <Typography variant="h6" component="h2" gutterBottom>
            1. 운영진 활동 규칙 (필수)
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="1) 디렉터의 매니지먼트 도움받기: 3주간의 온보딩 모임 참여, 결석체크, 자료 공유 체크!" />
            </ListItem>
            <ListItem>
              <ListItemText primary="2) 안정적으로 모임/프로젝트 운영하기: 혹시나 불참할 경우를 대비해 백업을 상시 준비!" />
            </ListItem>
            <ListItem>
              <ListItemText primary="3) 소통 채널 관리하기: 노션 페이지, 디스코드 채널을 잘 관리하여 러너와 원활히 소통!" />
            </ListItem>
            <ListItem>
              <ListItemText primary="4) Building in Public하기: 3회의 블로그(프로젝트 기획 / 중간 점검 / 종합 및 후기) 작성!" />
            </ListItem>
            <ListItem>
              <ListItemText primary="5) 받고싶은 선물 포장하기: 팀/프로젝트의 자료와 성과를 잘 포장하고 공유 및 발표하기!" />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  );
};

export default BuilderRules;
