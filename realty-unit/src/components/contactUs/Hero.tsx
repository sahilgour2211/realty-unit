import { Box, Button, Container, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "400px", // Adjust height as needed
        backgroundImage: "url('/images/property.png')",
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
              textAlign: "center",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 1.7188rem + 2.5vw, 3.125rem)",
            }}
          >
            Contact US
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
