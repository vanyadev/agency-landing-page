import React from "react";
import { BasicMenu } from "./dropDown";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";

import { styles } from "./styles";

export const BtnNav = ({ page }) => {
  return (
    <>
      {page.arrow ? (
        <BasicMenu page={page} />
      ) : (
        <Link
          component={NavLink}
          to={page.path}
          sx={styles.btnLink}
          style={({ isActive }) =>
            isActive ? { color: "#777FEB" } : undefined
          }
        >
          {page.title}
        </Link>
      )}
    </>
  );
};
