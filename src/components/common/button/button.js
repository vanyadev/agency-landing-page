import React from "react";
import { Button as MuiButton } from "@mui/material";

const styles = {
  btn: (theme) => ({
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "20px",
    textTransform: "capitalize",
    color: "#FFFFFF",
    padding: "20px 60px",
    background: theme.palette.slateBlue.main,
    borderRadius: "8px",
    "&:hover": {
      background: "#646ab0",
    },
  }),
};

export const Button = ({ children, type = "button" }) => {
  return (
    <MuiButton type={type} sx={styles.btn}>
      {children}
    </MuiButton>
  );
};
