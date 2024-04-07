import { useState } from "react";
import { Avatar } from "@mui/material";
import { Menu } from "@mui/icons-material";
import PseudoLabLogo from "../../components/common/PseudoLabLogo";
// import DiscordLoginButton from "../components/common/DiscordLoginButton";

interface ProfileProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  imgSrc: string;
}

const UserProfile = (profileProps: ProfileProps) => {
  return <Avatar src={profileProps.imgSrc} />;
};

export default UserProfile;
