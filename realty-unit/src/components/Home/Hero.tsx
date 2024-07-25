import { colors } from "@/constants";
import { Box, Button, Container, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "500px", // Adjust height as needed
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1))", // Gradient overlay
          display: "flex",
          //   alignItems: "center",
          justifyContent: "flex-start",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Container>
          <Typography
            sx={{
              textAlign: "start",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 1.7188rem + 2.5vw, 3.125rem)",
            }}
          >
            Find Your
          </Typography>
          <Typography
            sx={{
              textAlign: "start",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 1.7188rem + 2.5vw, 3.125rem)",
              mt: "-20px",
              color: "#FFE600",
            }}
          >
            DREAM
          </Typography>
          <Typography
            sx={{
              textAlign: "start",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 1.7188rem + 2.5vw, 3.125rem)",
              mt: "-20px",
            }}
          >
            House By Us
          </Typography>

          <Typography
            sx={{
              textAlign: "start",
              fontSize: "16px",
              mt: "20px",
            }}
          >
            Lorem Ipsum is simply dummy text of the and typesetting
            <br /> industry. Lorem Ipsum is dummy text of the printing.
          </Typography>

          <Box display={"flex"} mt={5} gap={3} flexWrap={"wrap"}>
            <Button
              sx={{
                fontWeight: 600,
                minWidth: 180,
                height: "50px",
                color: colors.HEADER,
                fontSize: "16px",
                padding: "16px",
                background: colors.BUTTON_BG,
                textTransform: "capitalize",
                ":hover": {
                  background: colors.BUTTON_BG,
                },
                borderRadius: "0px",
              }}
            >
              Services
            </Button>
            <Button
              sx={{
                fontWeight: 600,
                minWidth: 180,
                height: "50px",
                border: `2px solid ${colors.BUTTON_BG}`,
                color: colors.BUTTON_BG,
                fontSize: "16px",
                padding: "16px",
                background: "transparent",
                textTransform: "capitalize",
                ":hover": {
                  background: "transparent",
                },
                borderRadius: "0px",
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
