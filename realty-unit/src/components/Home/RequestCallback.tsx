import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const RequestCallback = () => {
  return (
    <Box sx={{ padding: "70px 0px" }}>
      <Container>
        <Grid
          container
          rowSpacing={"24px"}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item md={5} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <Typography
                fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
                fontWeight={700}
                lineHeight={"48px"}
              >
                REQUEST A CALLBACK
              </Typography>
              <Typography>
                Lorem Ipsum is simply dummy text of the and typesetting
                industry. Lorem Ipsum is dummy text of the printing.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxWidth: "58px", width: "100%" }}
                src="/images/call.png"
                alt=""
              />
              <Typography fontWeight={600}>CALL US</Typography>
            </Box>
          </Grid>
          <Grid item md={5} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <Typography fontWeight={600}>DIAL : +91-9876543210</Typography>
              <Typography fontWeight={600} textAlign={"center"}>
                OR
              </Typography>
              <Button
                sx={{
                  background: "#FFE600CC",
                  color: "#2E2E38",
                  maxWidth: "200px",
                  width: "100%",
                  height: "40px",
                  fontWeight: "600",
                  ":hover": {
                    background: "#FFE600CC",
                  },
                }}
              >
                Request Call
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RequestCallback;
