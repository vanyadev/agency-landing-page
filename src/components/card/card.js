import React from "react";

import { styles } from "./styles";
import arrowRight from "./../../assets/img/arrow-right.svg";

import {
  Box,
  Button,
  CardActions,
  CardContent,
  List,
  ListItem,
  Card as MuiCard,
  Typography,
} from "@mui/material";

export const Card = ({ title, imgSrc, subTitles }) => {
  return (
    <MuiCard sx={styles.card}>
      <CardContent sx={{ padding: 0 }}>
        <Box component="img" src={imgSrc} />
        <Typography variant="h3" sx={{ textTransform: "capitalize" }}>
          {title}
        </Typography>
        <List>
          {subTitles.map((item) => (
            <ListItem sx={styles.listItem} key={item.title}>
              <Box component="img" src={arrowRight} sx={{ mr: "3px" }} />
              {item.title}
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions sx={{ padding: 0 }}>
        <Button sx={styles.btn}>
          React more <Box component="img" src={arrowRight} sx={{ ml: "3px" }} />
        </Button>
      </CardActions>
    </MuiCard>
  );
};
