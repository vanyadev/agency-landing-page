import { createTheme } from "@mui/material";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

const breakpoints = createBreakpoints({});

const theme = createTheme({
  palette: {
    primary: {
      main: "#686868",
    },
    slateBlue: {
      main: "#777FEB",
    },
  },
  typography: {
    h2: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "29px",
      color: "#000000",
      [breakpoints.up("md")]: {
        fontSize: "64px",
        lineHeight: "78px",
      },
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "39px",
      color: "#000000",
    },
    body1: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "17px",
      color: "#686868",
      [breakpoints.up("md")]: {
        fontWeight: 500,
        fontSize: "24px",
        lineHeight: "29px",
      },
    },
  },
  someStyle: {
    fontFamily: "Montserrat,sans-serif",
    textTransform: "capitalize",
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "0.5px solid #777FEV",
        },
        root: {
          borderRadius: "8px",
          color: "#000",
          fontSize: "16px",
          lineHeight: "20px",
          fontWeight: 500,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #777FEB",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #777FEB",
          },
        },
      },
    },
  },
});

export default theme;
