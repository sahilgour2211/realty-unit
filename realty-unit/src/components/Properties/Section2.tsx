import { colors } from "@/constants";
import { ArrowDropDownCircleOutlined, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CustomSelect from "../custom/CustomSelect";

const Section2 = () => {
  return (
    <Box
      position={"relative"}
      bgcolor={"#eeeeee"}
      pb={{ xs: 0, sm: 4 }}
      pt={{ xs: 0, sm: 8 }}
    >
      <Container>
        {/* filter */}
        <Box
          display={{ xs: "none", sm: "flex" }}
          top={"-75%"}
          //   top={"0%"}
          position={"absolute"}
          bgcolor={"#fff"}
          p={"35px"}
          boxShadow={
            "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
          }
        >
          <Box>
            <Typography
              textAlign={"center"}
              fontWeight={700}
              color={colors.HEADER}
              fontSize={"clamp(1.25rem, 0.9375rem + 1vw, 1.5rem)"}
            >
              Search By Filter
            </Typography>
            <Box display={"flex"} gap={"24px"} mt={"20px"} flexWrap={"wrap"}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
                <InputLabel
                  sx={{ mt: "-10px", color: colors.HEADER, fontWeight: 500 }}
                  id="demo-simple-select-standard-label"
                >
                  Property Type
                </InputLabel>
                <CustomSelect
                  IconComponent={KeyboardArrowDownIcon} // Custom dropdown icon
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Property Type"
                >
                  <MenuItem value={10}>Commercial</MenuItem>
                  <MenuItem value={20}>Residential</MenuItem>
                </CustomSelect>
              </FormControl>
              <Box height={"55px"} p={"1.2px"} bgcolor={"#e0e0e0"}></Box>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
                <InputLabel
                  sx={{ mt: "-10px", color: colors.HEADER, fontWeight: 500 }}
                  id="demo-simple-select-standard-label"
                >
                  Property Type
                </InputLabel>
                <CustomSelect
                  IconComponent={KeyboardArrowDownIcon} // Custom dropdown icon
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Property Type"
                >
                  <MenuItem value={10}>Commercial</MenuItem>
                  <MenuItem value={20}>Residential</MenuItem>
                </CustomSelect>
              </FormControl>
              <Box height={"55px"} p={"1.2px"} bgcolor={"#e0e0e0"}></Box>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
                <InputLabel
                  sx={{ mt: "-10px", color: colors.HEADER, fontWeight: 500 }}
                  id="demo-simple-select-standard-label"
                >
                  Property Type
                </InputLabel>
                <CustomSelect
                  IconComponent={KeyboardArrowDownIcon} // Custom dropdown icon
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Property Type"
                >
                  <MenuItem value={10}>Commercial</MenuItem>
                  <MenuItem value={20}>Residential</MenuItem>
                </CustomSelect>
              </FormControl>
              <Box height={"55px"} p={"1.2px"} bgcolor={"#e0e0e0"}></Box>
              <Button
                endIcon={<Search />}
                sx={{
                  marginTop: "6px",
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: 600,
                  minWidth: 220,
                  height: "50px",
                  color: colors.HEADER,
                  fontSize: "16px",
                  padding: "16px",
                  background: colors.BUTTON_BG,
                  textTransform: "capitalize",
                  ":hover": {
                    background: colors.BUTTON_BG,
                  },
                }}
              >
                Search
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Section2;
