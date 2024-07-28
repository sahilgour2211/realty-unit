import { colors } from "@/constants";
import { Box, Container, Chip, Typography, Button } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HomeIcon from "@mui/icons-material/Home";
import { Mail } from "@mui/icons-material";

const dummy = [
  {
    name: "Piramal Mahalaxmi",
    place: "Gurugram, Haryana",
    price: "35.0 Lacs",
    size: "2 BHK",
    type: "Commercial",
    src: "/images/property1.png",
  },
  {
    name: "Piramal Mahalaxmi",
    place: "Gurugram, Haryana",
    price: "35.0 Lacs",
    size: "2 BHK",
    type: "Residential",
    src: "/images/property2.png",
  },
  {
    name: "Piramal Mahalaxmi",
    place: "Gurugram, Haryana",
    price: "35.0 Lacs",
    size: "2 BHK",
    type: "Commercial",
    src: "/images/property3.png",
  },
  {
    name: "Piramal Mahalaxmi",
    place: "Gurugram, Haryana",
    price: "35.0 Lacs",
    size: "2 BHK",
    type: "Residential",
    src: "/images/property4.png",
  },
  {
    name: "Piramal Mahalaxmi",
    place: "Gurugram, Haryana",
    price: "35.0 Lacs",
    size: "2 BHK",
    type: "Commercial",
    src: "/images/property5.png",
  },
  {
    name: "Piramal Mahalaxmi",
    place: "Gurugram, Haryana",
    price: "35.0 Lacs",
    size: "2 BHK",
    type: "Residential",
    src: "/images/property6.png",
  },
  {
    name: "Piramal Mahalaxmi",
    place: "Gurugram, Haryana",
    price: "35.0 Lacs",
    size: "2 BHK",
    type: "Residential",
    src: "/images/property6.png",
  },
  {
    name: "Piramal Mahalaxmi",
    place: "Gurugram, Haryana",
    price: "35.0 Lacs",
    size: "2 BHK",
    type: "Residential",
    src: "/images/property6.png",
  },
  {
    name: "Piramal Mahalaxmi",
    place: "Gurugram, Haryana",
    price: "35.0 Lacs",
    size: "2 BHK",
    type: "Residential",
    src: "/images/property6.png",
  },
];

const PropertyCard = ({ card }: any) => {
  return (
    <>
      <Box
        width={"350px"}
        height={"auto"}
        bgcolor={"#fff"}
        mb={6}
        boxShadow={
          "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"
        }
      >
        <Box width={"100%"} height={"250px"}>
          <img
            width={"100%"}
            height={"100%"}
            src={card.src}
            alt=""
            style={{ backgroundSize: "cover" }}
          />
        </Box>
        <Box position={"relative"} p={2}>
          <Box position={"absolute"} top={"-6%"}>
            <Chip
              label={card.type}
              sx={{ bgcolor: "#FFA800 !important", px: "20px", color: "#fff" }}
            />
          </Box>
          <Typography
            mt={2}
            pl={0.5}
            color={colors.HEADER}
            fontWeight={700}
            fontSize={"18px"}
            textAlign={"left"}
          >
            {card.name}
          </Typography>
          <Typography
            mt={2}
            color={colors.HEADER}
            fontWeight={500}
            fontSize={"16px"}
            textAlign={"left"}
            display={"flex"}
            gap={1}
          >
            <LocationOnIcon /> <span> {card.place}</span>
          </Typography>
          <Typography
            mt={1}
            color={colors.HEADER}
            fontWeight={500}
            fontSize={"16px"}
            textAlign={"left"}
            display={"flex"}
            gap={1}
          >
            <CurrencyRupeeIcon /> <span> {card.price}</span>
          </Typography>
          <Typography
            mt={1}
            color={colors.HEADER}
            fontWeight={500}
            fontSize={"16px"}
            textAlign={"left"}
            display={"flex"}
            gap={1}
          >
            <HomeIcon /> <span> {card.size}</span>
          </Typography>

          <Box
            mt={3}
            mb={2}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              mt={1}
              color={colors.HEADER}
              fontWeight={500}
              fontSize={"16px"}
              textAlign={"left"}
              display={"flex"}
              gap={1}
            >
              <Mail /> <span>Reach Us</span>
            </Typography>

            <Button
              sx={{
                fontWeight: 500,
                minWidth: 125,
                height: "35px",
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
              Read More
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const Section3 = () => {
  return (
    <Box sx={{ color: "#000", mt: "60px" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>1-9 of 145 results</Typography>
          <Box sx={{ display: "flex", gap: "20px", padding: "40px 0px" }}>
            <Typography>clear</Typography>
            <Typography>Filters</Typography>
          </Box>
        </Box>
        <Box>
          <Box
            py={{ xs: 1, sm: 3 }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Box
              display={"flex"}
              justifyContent={{ xs: "center", sm: "space-between" }}
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              {dummy.map((card) => (
                <PropertyCard key={card.src} card={card} />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Section3;
