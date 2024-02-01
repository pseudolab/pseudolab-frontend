import React from "react";
import { Box, Container, Toolbar, Button } from "@mui/material";
import PseudoLabLogo from "../components/common/PseudoLabLogo";
import DiscordLoginButton from "../components/common/DiscordLoginButton";

const Header = () => {
  return (
    <React.Fragment>
      <Container>
        <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
          <PseudoLabLogo
            maxWidth="100px"
            height="auto"
            marginRight="50px" // 이미지와 텍스트 사이에 간격을 조절
          />
          <Box>
            <Button color="inherit" href="/Test">
              커뮤니티
            </Button>
            <Button color="inherit" href="/Test">
              빌더
            </Button>
            <Button color="inherit" href="/About">
              러너
            </Button>
            {/* 권한에 따라 관리자 페이지 메뉴 추가 */}
          </Box>
          {/* 로그인 상태가 아니라면 */}
          <DiscordLoginButton />
          {/* 로그인 상태라면 프로필 얼굴 */}
        </Toolbar>
      </Container>
    </React.Fragment>
  );
};

export default Header;
