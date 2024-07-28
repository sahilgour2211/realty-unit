import { Box, Button, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { colors } from "@/constants";

const imgs = [
  "/images/gallery1.png",
  "/images/gallery2.png",
  "/images/gallery3.png",
  "/images/gallery4.png",
];

const Gallery = () => {
  return (
    <Box bgcolor={"#fff"} pb={"0px"}>
      <Container>
        <Typography
          color={colors.HEADER}
          pt={"60px"}
          textAlign={"center"}
          fontSize={"clamp(1.25rem, 1.0943rem + 0.7547vw, 2rem)"}
          fontWeight={600}
        >
          Gallery
        </Typography>
        <Swiper
          spaceBetween={30}
          centeredSlides={false}
          //   slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {imgs.map((img) => (
            <SwiperSlide key={img}>
              <Box
                width={{ xs: "400px", sm: "380px" }}
                // width={"100%"}
                height={"325px"}
                display="flex"
                justifyContent="center"
              >
                <img
                  width={"100%"}
                  style={{ objectFit: "scale-down" }}
                  src={img}
                  alt=""
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            sx={{
              mt: 2,
              fontWeight: 500,
              minWidth: { xs: "100%", sm: 180 },
              height: "60px",
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
            View Gallery
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery;
