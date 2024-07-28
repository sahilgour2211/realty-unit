"use client";
import { colors, navItems } from "@/constants";
import { Mail, Menu, Phone } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Typography,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [mobile, setMobile] = useState(false);

  const DrawerComponent = () => {
    return (
      <Drawer anchor="right" open={true} onClose={() => setMobile(false)}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={3}
          mt={3}
          px={3}
          width={250}
        >
          {navItems.map((item) => (
            <Typography
              onClick={() => {
                router.push(item.path);
              }}
              key={item.name}
              sx={{ cursor: "pointer" }}
              color={colors.HEADER}
              fontWeight={600}
              fontSize={"18px"}
              borderBottom={item.path === pathname ? "3px solid #FFA800" : ""}
            >
              {item.name}
            </Typography>
          ))}
        </Box>
        <Box pl={3} mt={3}>
          <Button
            sx={{
              borderRadius: "0px",
              fontWeight: 600,
              minWidth: 180,
              height: "40px",
              color: colors.HEADER,
              fontSize: "16px",
              padding: "16px",
              background: "#FFEB33",
              textTransform: "capitalize",
              ":hover": {
                background: "#FFEB33",
              },
            }}
          >
            Request A Call
          </Button>
        </Box>
      </Drawer>
    );
  };
  return (
    <>
      <Box bgcolor={colors.FOOTER_BG} py={1}>
        <Container>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            overflow={"auto"}
          >
            <Box display={"flex"} gap={4}>
              <Typography
                color={"#fff"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={1}
              >
                <Phone
                  fontSize="small"
                  sx={{ color: `${colors.BUTTON_BG} !important` }}
                />
                <span>+91-7535065051</span>
              </Typography>
              <Typography
                color={"#fff"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={1}
              >
                <Mail
                  fontSize="small"
                  sx={{ color: `${colors.BUTTON_BG} !important` }}
                />
                <span>info@realtyunit.in</span>
              </Typography>
            </Box>
            <Box
              display={{ xs: "none", md: "flex" }}
              gap={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img width={"16px"} height={"16px"} src="/images/fb.png" />
              <img width={"16px"} height={"16px"} src="/images/insta.png" />
              <img width={"16px"} height={"16px"} src="/images/ldkn.png" />
              <img width={"16px"} height={"16px"} src="/images/x.png" />
            </Box>
          </Box>
        </Container>
      </Box>

      <Container>
        <Box
          py={"14px"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexGrow={1}
        >
          <Box display={"flex"}>
            <Navbar.Brand
              onClick={() => {
                router.push("/");
              }}
            >
              <img width={"100px"} src="/images/logo.png" alt="" />
            </Navbar.Brand>
          </Box>
          <Box
            display={{ xs: "flex", md: "none" }}
            onClick={() => setMobile(!mobile)}
          >
            <Menu fontSize="large" />
          </Box>
          <Box
            display={{ xs: "none", md: "flex" }}
            gap={"28px"}
            flexWrap={"wrap"}
          >
            {navItems.map((item) => (
              <Typography
                onClick={() => {
                  router.push(item.path);
                }}
                key={item.name}
                sx={{ cursor: "pointer" }}
                color={colors.HEADER}
                fontWeight={600}
                fontSize={"18px"}
                borderBottom={item.path === pathname ? "3px solid #FFA800" : ""}
              >
                {item.name}
              </Typography>
            ))}
          </Box>
          <Box display={{ xs: "none", md: "flex" }}>
            <Button
              sx={{
                borderRadius: "0px",
                fontWeight: 600,
                minWidth: 180,
                height: "40px",
                color: colors.HEADER,
                fontSize: "16px",
                padding: "16px",
                background: "#FFEB33",
                textTransform: "capitalize",
                ":hover": {
                  background: "#FFEB33",
                },
              }}
            >
              Request A Call
            </Button>
          </Box>
        </Box>
      </Container>
      {mobile && DrawerComponent()}
    </>
  );
};

export default Header;
