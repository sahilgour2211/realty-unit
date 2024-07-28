"use client";

import { Box, Button, Chip, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HomeIcon from "@mui/icons-material/Home";
import { Mail } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { colors } from "@/constants";

const PropertyCard = ({ card }: any) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/properties/${card.id}`);
  };
  return (
    <Box
      width={"350px"}
      onClick={handleClick}
      height={"auto"}
      bgcolor={"#fff"}
      mb={6}
      boxShadow={
        "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"
      }
      sx={{
        transition: "transform 0.3s ease-in-out",
        transformStyle: "preserve-3d",
        "&:hover": {
          transform: "translate(0, -30px)",
        },
      }}
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
  );
};

export default PropertyCard;
