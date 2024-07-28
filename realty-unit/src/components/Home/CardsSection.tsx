import { colors, dummy } from "@/constants";
import { Box, Button, Chip, Container, Typography } from "@mui/material";
import PropertyCard from "./PropertyCard";

const CardsSection = () => {
  return (
    <Box bgcolor={"#eeeeee"}>
      <Container>
        <Box
          py={{ xs: 1, sm: 3 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Typography
            py={5}
            textAlign={"center"}
            fontWeight={700}
            color={colors.HEADER}
            fontSize={"clamp(1.25rem, 0.9375rem + 1vw, 1.5rem)"}
          >
            Properties
          </Typography>

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
          <Button
            sx={{
              my: 3,
              fontWeight: 600,
              minWidth: 250,
              height: "50px",
              color: "#000",
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
            See More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CardsSection;
