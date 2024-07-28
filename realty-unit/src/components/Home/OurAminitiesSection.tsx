"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import SecurityIcon from "@mui/icons-material/Security";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PoolIcon from "@mui/icons-material/Pool";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { usePathname } from "next/navigation";

const OurAminitiesSection = () => {
  const pathname = usePathname();
  const pathsize = pathname.split("/");
  const dummydata = [
    {
      id: 1,
      icon: (
        <DirectionsCarFilledIcon
          sx={{
            color: pathsize.length > 2 ? "#000" : "#fff",
            fontSize: "44px",
          }}
        />
      ),
      title: "Parking Space",
    },
    {
      id: 2,
      icon: (
        <SecurityIcon
          sx={{
            color: pathsize.length > 2 ? "#000" : "#fff",
            fontSize: "44px",
          }}
        />
      ),
      title: "Private Security",
    },
    {
      id: 3,
      icon: (
        <FitnessCenterIcon
          sx={{
            color: pathsize.length > 2 ? "#000" : "#fff",
            fontSize: "44px",
          }}
        />
      ),
      title: "Sports",
    },
    {
      id: 4,
      icon: (
        <PoolIcon
          sx={{
            color: pathsize.length > 2 ? "#000" : "#fff",
            fontSize: "44px",
          }}
        />
      ),
      title: "Swimming Pool",
    },
    {
      id: 5,
      icon: (
        <BedroomBabyIcon
          sx={{
            color: pathsize.length > 2 ? "#000" : "#fff",
            fontSize: "44px",
          }}
        />
      ),
      title: "Kids Playground",
    },
    {
      id: 5,
      icon: (
        <WaterDropIcon
          sx={{
            color: pathsize.length > 2 ? "#000" : "#fff",
            fontSize: "44px",
          }}
        />
      ),
      title: "24X7 Water Supply",
    },
  ];

  return (
    <Box sx={{ marginTop: "114px" }}>
      <Box
        sx={{
          backgroundImage:
            pathsize.length > 2 ? "" : "url('/images/amiti.png')",
          width: "100%",
          height: { md: "346px", xs: "480px" },
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            background:
              pathsize.length > 2 ? "#EEEEEE" : "url('/images/layeramiti.png')",
            width: "100%",
            height: { md: "346px", xs: "480px" },
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container>
            <Typography
              color={pathsize.length > 2 ? "#000" : "#fff"}
              pt={"80px"}
              textAlign={"center"}
              fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
              fontWeight={600}
            >
              Our Amenities
            </Typography>
            <Box sx={{ marginTop: { md: "66px", xs: "42px" } }}>
              <Grid
                container
                columnSpacing={"24px"}
                rowSpacing={"24px"}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {dummydata.map((item) => {
                  return (
                    <Grid item md={2} sm={4} xs={6} key={item.id}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "4px",
                          alignItems: "center",
                        }}
                        key={item.id}
                      >
                        <Box>{item.icon}</Box>
                        <Typography
                          color={pathsize.length > 2 ? "#000" : "#fff"}
                          textAlign={"center"}
                          fontWeight={"700"}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default OurAminitiesSection;
