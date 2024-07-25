import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import MoneyIcon from "@mui/icons-material/Money";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const OurServiceSection = () => {
  const dummyData = [
    {
      id: 1,
      title: "Buy Home",
      icon: (
        <LocalOfferOutlinedIcon sx={{ fontSize: "45px", color: "#FFA800" }} />
      ),
      description:
        "Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing. Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.",
    },
    {
      id: 2,
      title: "Rent Home",
      icon: (
        <HandshakeOutlinedIcon sx={{ fontSize: "45px", color: "#FFA800" }} />
      ),
      description:
        "Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing. Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.",
    },
    {
      id: 3,
      title: "Sell Home",
      icon: <MoneyIcon sx={{ fontSize: "45px", color: "#FFA800" }} />,
      description:
        "Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing. Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.",
    },
  ];
  return (
    <Box>
      <Container>
        <Typography
          textAlign={"center"}
          fontSize={"clamp(1.25rem, 0.9375rem + 1vw, 1.5rem)"}
          fontWeight={700}
          mt={"32px"}
        >
          Our Services
        </Typography>
        <Box sx={{ marginTop: "46px" }}>
          <Grid container columnSpacing={"32px"} rowSpacing={"24px"}>
            {dummyData.map((item) => {
              return (
                <Grid item md={4} sm={6} xs={12} key={item.id}>
                  <Box
                    sx={{
                      padding: "32px",
                      boxShadow: "0px 5px 20px 0px #00000040",
                      display: "flex",
                      flexDirection: "column",
                      gap: "32px",
                      alignItems: "center",
                      borderBottom: "4px solid #FFA800",
                    }}
                  >
                    <Box
                      sx={{
                        width: "124px",
                        height: "124px",
                        borderRadius: "124px",
                        background: "#FFA80033",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography fontWeight={600} fontSize={"18px"}>
                      {item.title}
                    </Typography>
                    <Typography>{item.description}</Typography>
                    <Button
                      sx={{
                        color: "#FFA800",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Find a Home{" "}
                      <ArrowRightAltIcon sx={{ marginLeft: "12px" }} />
                    </Button>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default OurServiceSection;
