"use client";
import { colors } from "@/constants";
import { CloseOutlined } from "@mui/icons-material";
import { Box, Container, Dialog, Typography } from "@mui/material";
import { useState } from "react";

const MapModal = ({ src, onClose }: any) => {
  return (
    <Dialog open={true} onClose={onClose} maxWidth="md">
      <Box position={"relative"}>
        <Box
          position={"absolute"}
          borderRadius={"50%"}
          p={0.8}
          sx={{
            cursor: "pointer",
            backdropFilter: "blur(5px)", // Glass effect
            transition: "background-color 0.5s ease", // Smooth transition effect
            ":hover": {
              bgcolor: "#fff",
            },
          }}
          right={"3%"}
          top={"3%"}
        >
          <CloseOutlined onClick={onClose} />
        </Box>
        <img src={src} alt="" />
      </Box>
    </Dialog>
  );
};

const MapSection = () => {
  const [openMap, setOpenMap] = useState(false);
  const [mapImg, setMapImg] = useState("/images/map.jpg");

  return (
    <Box bgcolor={"#fff"} pb={"50px"}>
      <Container>
        <Typography
          color={colors.HEADER}
          pt={"60px"}
          textAlign={"center"}
          fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
          fontWeight={600}
        >
          Property Location
        </Typography>

        <Box
          sx={{ cursor: "pointer" }}
          width={"100%"}
          height={"400px"}
          mt={3}
          position="relative"
          className="image-container"
        >
          <img
            style={{
              objectFit: "scale-down",
            }}
            width={"100%"}
            height={"100%"}
            src={mapImg}
            alt=""
          />
          <div
            className="overlay"
            onClick={() => {
              setOpenMap(true);
            }}
          >
            <span>Click to expand</span>
          </div>
        </Box>
      </Container>

      {openMap && (
        <MapModal
          src={mapImg}
          onClose={() => {
            setOpenMap(false);
          }}
        />
      )}
    </Box>
  );
};

export default MapSection;
