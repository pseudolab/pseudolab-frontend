import React, { useState, useEffect } from "react";
import {
  Paper,
  Slide,
  Box,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";

const bannerImages = [
  "https://pseudo-lab.com/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F333f96cf-396d-45ff-8331-232d41bd4d55%2Fa7cc37d4-d7b6-4421-80d4-73d46bb46027%2F-7---_-001_3.png?table=block&id=957b39d1-7657-484a-846c-3b261e67e004&spaceId=333f96cf-396d-45ff-8331-232d41bd4d55&width=2000&userId=&cache=v2",
  "https://pseudo-lab.com/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F333f96cf-396d-45ff-8331-232d41bd4d55%2Fa7cc37d4-d7b6-4421-80d4-73d46bb46027%2F-7---_-001_3.png?table=block&id=957b39d1-7657-484a-846c-3b261e67e004&spaceId=333f96cf-396d-45ff-8331-232d41bd4d55&width=2000&userId=&cache=v2",
  "https://pseudo-lab.com/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F333f96cf-396d-45ff-8331-232d41bd4d55%2Fa7cc37d4-d7b6-4421-80d4-73d46bb46027%2F-7---_-001_3.png?table=block&id=957b39d1-7657-484a-846c-3b261e67e004&spaceId=333f96cf-396d-45ff-8331-232d41bd4d55&width=2000&userId=&cache=v2",
];

const MainBanner = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [imageHeight, setImageHeight] = useState(300);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBannerIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length
      );
      setLoading(true);
    }, 5000); // 5초마다 배너 변경 (단위: 밀리초)

    return () => clearInterval(intervalId); // 컴포넌트가 언마운트되면 interval 정리
  }, []);

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setLoading(false);
    setImageHeight((event.target as HTMLImageElement).clientHeight);
  };

  return (
    <Paper
      elevation={bannerImages.length}
      style={{
        position: "relative",
        overflow: "hidden",
        height: `${imageHeight}px`,
      }}
    >
      {bannerImages.map((image, index) => (
        <Slide
          key={index}
          direction="left"
          in={index === currentBannerIndex}
          mountOnEnter
          unmountOnExit
        >
          <Box
            component="div"
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            {loading && (
              <CircularProgress
                size={50}
                thickness={5}
                sx={{
                  color: "#fff",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            )}
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: index === currentBannerIndex ? 0.7 : 1,
              }}
              onLoad={handleImageLoad}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "#fff",
                width: "80%", // 가운데 정렬을 위해 추가
              }}
            >
              <Typography variant="h4">Main Banner</Typography>
              <Typography variant="body1">
                This is a sample description.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Learn More
              </Button>
            </Box>
          </Box>
        </Slide>
      ))}
    </Paper>
  );
};

export default MainBanner;
