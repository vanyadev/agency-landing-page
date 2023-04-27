import React from "react";

import { styles } from "./styles";
import { Box, Stack, Typography } from "@mui/material";
import { Card } from "../card/card";
import strategy from "./../../assets/img/strategy.svg";
import design from "./../../assets/img/design.svg";
import development from "./../../assets/img/development.svg";

const cards = [
  {
    title: "Strategy",
    img: strategy,
    subTitles: [
      { title: "product manegment" },
      { title: "mpv definition" },
      { title: "product strategy" },
    ],
  },
  {
    title: "product design",
    img: design,
    subTitles: [
      { title: "product manegment" },
      { title: "mpv definition" },
      { title: "product strategy" },
    ],
  },
  {
    title: "development",
    img: development,
    subTitles: [
      { title: "product manegment" },
      { title: "mpv definition" },
      { title: "product strategy" },
    ],
  },
];

export const CreativeDesign = () => {
  return (
    <Box sx={styles.creativeDesign}>
      <Box sx={styles.wrapper}>
        <Typography variant="h2">Creative Design Solutions</Typography>
        <Typography
          variant="body1"
          sx={{ textTransform: "capitalize", m: "25px 0" }}
        >
          professional deign agency to provide solutions{" "}
        </Typography>
        <Stack sx={styles.stack}>
          {cards.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              imgSrc={item.img}
              subTitles={item.subTitles}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
