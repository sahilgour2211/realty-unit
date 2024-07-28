import { colors } from "@/constants";
import { Box, Container, Grid, Typography } from "@mui/material";

const feat = [
  {
    src: "/images/feat1.png",
    title: "Master Bedroom",
    desc: "Walls: Oil Bound Distemper, Flooring: Laminated Wooden",
  },
  {
    src: "/images/feat2.png",
    title: "Other Bedroom",
    desc: "Walls: Oil Bound Distemper, Flooring: Laminated Wooden",
  },
  {
    src: "/images/feat3.png",
    title: "Living Area",
    desc: "Flooring: Italian/Imported Marble",
  },
  {
    src: "/images/feat4.png",
    title: "Fittings & Fixtures",
    desc: "Split Air Conditioner",
  },
  {
    src: "/images/feat5.png",
    title: "Bathroom",
    desc: "Shower Panel: Premium Bath Fittings",
  },
  {
    src: "/images/feat6.png",
    title: "Structure",
    desc: "Seismic Zone IV Compliant",
  },
];
const Features = () => {
  return (
    <Box bgcolor={"#EEEEEE"} pb={"60px"} mt={"40px"}>
      <Container>
        <Typography
          color={colors.HEADER}
          pt={"60px"}
          textAlign={"center"}
          fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
          fontWeight={600}
        >
          Features
        </Typography>
        <Typography
          mt={"20px"}
          color={colors.HEADER}
          textAlign={"center"}
          fontSize={"16px"}
          fontWeight={500}
        >
          Premium living spaces, designed for discerning tastes
        </Typography>

        <Grid container mt={6}>
          <Grid item sm={6}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              width={{ xs: "380px", sm: "500px" }}
              height={{ xs: "380px", sm: "500px" }}
            >
              <img
                width={"100%"}
                height={"100%"}
                src="/images/feature.png"
                alt=""
              />
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={4}
              mt={{ xs: 4, sm: 0 }}
            >
              {feat.map((item) => (
                <Box display={"flex"} gap={"14px"}>
                  <Box width={"40px"} height={"28px"}>
                    <img
                      width={"100%"}
                      height={"100%"}
                      style={{ objectFit: "scale-down" }}
                      src={item.src}
                      alt=""
                    />
                  </Box>
                  <Box>
                    <Typography
                      fontWeight={700}
                      fontSize={"18px"}
                      color={colors.HEADER}
                    >
                      {item.title}
                    </Typography>
                    <Typography mt={1} fontSize={"16px"} color={colors.HEADER}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
