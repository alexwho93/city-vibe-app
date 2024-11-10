import React from "react";
import {
  Card,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

function DescriptionCard() {
  return (
    <Card sx={{ padding: 2 }}>
      <Typography variant="h6">Description </Typography>
      <Divider sx={{ margin: "5px 0", background: "rgba(255,255,255,0.2)" }} />
      <Typography variant="body1">
        Piatra-Neamț, city, capital of Neamț județ (county), northeastern
        Romania. It lies in the valley of the Bistrița River and is surrounded
        by mountains. It is first documented in the 14th century as Piatra lui
        Crăciun, or Camena, a market town where fairs were held. Stephen the
        Great of Moldavia built the Church of St. John there in 1497–98, a
        classic example of ornate Moldavian architecture.
      </Typography>
    </Card>
  );
}

export default DescriptionCard;
