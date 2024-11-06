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
      <Typography variant="h4">Description </Typography>
      <Divider sx={{ margin: "10px 0", background: "rgba(255,255,255,0.2)" }} />
      <Typography variant="body1">
        Piatra-Neamț, city, capital of Neamț județ (county), northeastern
        Romania. It lies in the valley of the Bistrița River and is surrounded
        by mountains. It is first documented in the 14th century as Piatra lui
        Crăciun, or Camena, a market town where fairs were held. Stephen the
        Great of Moldavia built the Church of St. John there in 1497–98, a
        classic example of ornate Moldavian architecture. The Bistrița
        Monastery, founded at the beginning of the 15th century by Prince
        Alexander the Good and rebuilt in 1554 by Prince Alexander Lăpușneanu,
        is 5 miles (8 km) west of Piatra-Neamț.
      </Typography>
    </Card>
  );
}

export default DescriptionCard;
