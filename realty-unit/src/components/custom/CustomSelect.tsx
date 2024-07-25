"use client";
import { BorderBottom } from "@mui/icons-material";
import { Select, styled, SelectProps } from "@mui/material";

const CustomSelect = styled(Select)<SelectProps>(() => ({
  "& .MuiSelect-select": {
    borderColor: "#000", // Change border color
    "&:focus": {
      borderRadius: 4,
      borderColor: "#000",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#000", // Change border color
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#000", // Change border color when focused
  },
  "& .MuiSvgIcon-root": {
    color: "#000", // Change the dropdown icon color
    marginTop: "-10px",
  },

  "&:before": {
    borderBottom: "2px solid #000", // Change the bottom border color before interaction
  },
}));

export default CustomSelect;
