"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <Box sx={{ background: "#2e2e38", mt: "24px" }}>
      <Container>
        <Grid
          columnSpacing={"24px"}
          rowSpacing={"24px"}
          container
          p={"40px 0px"}
        >
          <Grid item md={6} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <img
                style={{ maxWidth: "198px", width: "100%" }}
                src="/images/mainlogo.png"
                alt=""
              />
              <Typography fontSize={"18px"} color={"#fff"}>
                Lorem Ipsum is simply dummy text of the
                <br /> and typesetting industry. Lorem Ipsum is
                <br /> dummy text of the printing.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <Typography color={"#fff"} fontWeight={"700"}>
                QUICK LINKS
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <Typography color={"#fff"}>Home</Typography>
                <Typography color={"#fff"}>Gallery</Typography>
                <Typography color={"#fff"}>About Us</Typography>
                <Typography color={"#fff"}>Contact Us</Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <Typography color={"#fff"} fontWeight={"700"}>
                  SOCIALS
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <FacebookRoundedIcon sx={{ color: "#fff" }} />
                  <XIcon sx={{ color: "#fff" }} />
                  <InstagramIcon sx={{ color: "#fff" }} />
                  <LinkedInIcon sx={{ color: "#fff" }} />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "56px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <Typography color={"#fff"} fontWeight={"700"}>
                  OFFICIAL INFORMATION
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: "4px",
                      alignItems: "center",
                      marginTop: "12px",
                    }}
                  >
                    <EmailIcon sx={{ color: "#fff" }} />
                    <Typography ml={"4px"} color={"#fff"}>
                      email@gmail.com
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "4px",
                      alignItems: "center",
                    }}
                  >
                    <PhoneIcon sx={{ color: "#fff" }} />
                    <Typography ml={"4px"} color={"#fff"}>
                      +91-9876543210
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <Typography color={"#fff"} fontWeight={"700"}>
                  ADDRESS
                </Typography>
                <Typography color={"#fff"}>
                  Lorem Ipsum is simply
                  <br /> dummy text of the and
                  <br /> typesetting industry
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ padding: "20px", borderTop: "1px solid #fff" }}>
        <Typography color={"#fff"} textAlign={"center"}>
          2024 All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
