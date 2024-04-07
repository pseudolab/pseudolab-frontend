import { Avatar, IconButton } from "@mui/material";
import { Login } from "@mui/icons-material";
import { useState } from "react";

// import DiscordLoginButton from "../components/common/DiscordLoginButton";

interface ProfileProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  isLoggedin: boolean;
  imgSrc: string;
}

const UserProfile = (profileProps: ProfileProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(profileProps.isLoggedin);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
    console.log(isLoggedIn);
  };

  return (
    <IconButton size="medium" onClick={handleClick}>
      {isLoggedIn ? <Avatar src="" /> : <Login />}
    </IconButton>
  );
};

export default UserProfile;
