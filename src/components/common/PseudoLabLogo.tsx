import { styled } from "@mui/system";
import pseudoLabLogo from "../../assets/pseudo-lab-logo.svg";
import { Link } from "react-router-dom";

type LogoImageProps = {
  maxWidth: string;
  height: string;
  marginRight: string;
};

const PseudoLabLogo = (props: LogoImageProps) => {
  const LogoImageStyle = styled("img")({
    maxWidth: props.maxWidth,
    height: props.height,
    marginRight: props.marginRight, // 이미지와 텍스트 사이에 간격을 조절
  });

  return (
    <Link to="/">
      <LogoImageStyle src={pseudoLabLogo} alt="PseudoLab Logo"></LogoImageStyle>
    </Link>
  );
};

export default PseudoLabLogo;
