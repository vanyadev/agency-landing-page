import React from "react";

import { styles } from "./styles";
import { Box, Grid, Link, Typography } from "@mui/material";
import dashboard_photo from "./../../assets/img/dashborad-photo.svg";
import landing_photo from "./../../assets/img/landing-page-photo.svg";
import illustration_photo from "./../../assets/img/ilustraton-page-photo.svg";

const experienceCards = [
  { title: "dashborad design", imgSrc: dashboard_photo },
  { title: "landing pages", imgSrc: landing_photo },
  { title: "ilustration design", imgSrc: illustration_photo },
];

const links = [
  "Show all",
  "design",
  "branding",
  "development",
  "seo",
  "UX/UI Design",
];

export const Experience = () => {
  return (
    <Box sx={styles.experience}>
      <Box sx={styles.wrapper}>
        <Typography variant="h2">professional experience</Typography>
        <Typography
          variant="body1"
          sx={{ textTransform: "capitalize", m: "25px 0" }}
        >
          professional design agency to provide solutions
        </Typography>
        <Box sx={styles.links}>
          {links.map((link, index) => (
            <Link key={index}>{link}</Link>
          ))}
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {experienceCards.map((card, index) => (
            <Grid item xs={6} sm={4} md={4} key={index}>
              <Box>
                <Box
                  component="img"
                  src={card.imgSrc}
                  alt="img"
                  sx={styles.imgItem}
                />
                <Typography sx={styles.contentTitle}>{card.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
