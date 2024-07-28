"use client";
import { colors, propDetailsImages } from "@/constants";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Download } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import ForestIcon from "@mui/icons-material/Forest";
import { useState } from "react";

const TopImageSection = () => {
  const [selectedImg, setSelectedImg] = useState("/images/building.jpg");
  return (
    <Container>
      <Grid container py={2} columnSpacing={15}>
        <Grid item sm={6}>
          <Box
            width={{ xs: "400px", sm: "550px" }}
            height={{ xs: "300px", sm: "400px" }}
          >
            <img width={"100%"} height={"100%"} src={selectedImg} alt="" />
          </Box>
        </Grid>
        <Grid item xs={12} display={{ xs: "flex", sm: "none" }}>
          <Box
            mt={"24px"}
            display={"flex"}
            // flexWrap={"wrap"}
            gap={"24px"}
            width={"100%"}

            // bgcolor={"red"}
          >
            {propDetailsImages.map((item) => (
              <Box
                onClick={() => {
                  setSelectedImg(item);
                }}
                key={item}
                width={"75px"}
                height={"50px"}
                sx={{
                  cursor: "pointer",
                  border: selectedImg === item && "2px solid #000",
                }}
              >
                <img width={"100%"} height={"100%"} src={item} alt="" />
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography
              mt={{ xs: "12px", sm: "0px" }}
              fontWeight={700}
              fontSize={"clamp(1.375rem, 0.9063rem + 1.5vw, 1.75rem);"}
            >
              SS Linden
            </Typography>
            <Chip
              label={"Residential"}
              sx={{
                bgcolor: "#FFA800 !important",
                px: "8px",
                py: "0px",
                color: "#fff",
                mt: 1.5,
                letterSpacing: "1px",
              }}
            />
            <Box mt={1.5}>
              <Rating defaultValue={4} />
            </Box>
            <Typography
              mt={1.5}
              color={colors.HEADER}
              fontWeight={500}
              fontSize={"16px"}
              textAlign={"left"}
              display={"flex"}
              gap={1}
            >
              <LocationOnIcon /> <span> {"Gurugram Sector-84, Haryana"}</span>
            </Typography>
            <Typography
              mt={1.5}
              color={colors.HEADER}
              fontWeight={500}
              fontSize={"16px"}
              textAlign={"left"}
              display={"flex"}
              gap={1}
            >
              <CurrencyRupeeIcon /> <span> {"35.0 Lacs*"}</span>
            </Typography>
            <Typography
              mt={1.5}
              color={colors.HEADER}
              fontWeight={500}
              fontSize={"16px"}
              textAlign={"left"}
              display={"flex"}
              gap={1}
            >
              <HomeIcon /> <span> {"4 BHK"}</span>
            </Typography>

            {/* <Typography
              mt={1.5}
              color={colors.HEADER}
              fontWeight={700}
              fontSize={"16px"}
              textAlign={"left"}
              display={"flex"}
              gap={1}
            >
              EMI:{" "}
              <span style={{ fontWeight: 500 }}>
                {" "}
                {": No Cost EMI Available"}
              </span>
            </Typography> */}

            <Typography
              mt={1.5}
              color={colors.HEADER}
              fontWeight={500}
              fontSize={"16px"}
              textAlign={"left"}
              display={"flex"}
              gap={1}
            >
              <ForestIcon /> <span> {"2,800 Sq.ft."}</span>
            </Typography>

            <Button
              startIcon={<Download />}
              sx={{
                mt: 2.5,
                fontWeight: 500,
                minWidth: { xs: "100%", sm: 300 },
                height: "45px",
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
              Download Brouchure
            </Button>
            <Button
              startIcon={<EmailIcon />}
              sx={{
                mt: 2,
                fontWeight: 500,
                minWidth: { xs: "100%", sm: 300 },
                height: "45px",
                color: colors.HEADER,
                fontSize: "16px",
                padding: "16px",
                background: "#ffa800",
                textTransform: "capitalize",
                ":hover": {
                  background: "#ffa800",
                },
                borderRadius: "0px",
              }}
            >
              Make Enquiry
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box
        my={"24px"}
        display={{ xs: "none", sm: "flex" }}
        flexWrap={"wrap"}
        gap={"24px"}
      >
        {propDetailsImages.map((item) => (
          <Box
            onClick={() => {
              setSelectedImg(item);
            }}
            key={item}
            width={"75px"}
            height={"50px"}
            sx={{
              cursor: "pointer",
              border: selectedImg === item && "2px solid #000",
            }}
          >
            <img width={"100%"} height={"100%"} src={item} alt="" />
          </Box>
        ))}
      </Box>

      {/* description */}
      <Box mt={"40px"}>
        <Typography fontWeight={700} fontSize={"18px"}>
          Description
        </Typography>
        <Typography mt={"10px"} color={colors.HEADER}>
          SS Linden is a stunning project developed by the esteemed SS Group,
          one of the renowned builders in Gurgaon. Situated in Sector 84, Dwarka
          Expressway, it boasts excellent connectivity to major roads such as NH
          8 and Dwarka Expressway. Spanning 27 acres, SS Linden comprises 743
          units. The project is currently in the mid-stage of development.
        </Typography>
      </Box>
    </Container>
  );
};

export default TopImageSection;
