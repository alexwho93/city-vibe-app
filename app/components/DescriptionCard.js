import React from "react";
import { Card, Divider, Typography, CircularProgress } from "@mui/material";

import { useGroqAI } from "@services/queries";

const cardStyles = {
  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "1rem 0",
};

function DescriptionCard({ cityName }) {
  const { data, error, isLoading } = useGroqAI(
    `Write a 60 word description about ${cityName} city`
  );

  if (isLoading) {
    return (
      <Card sx={cardStyles}>
        <CircularProgress />
      </Card>
    );
  }

  if (error || !data || !data.choices || data.choices.length === 0) {
    return (
      <Card sx={cardStyles}>
        <div>Error loading description.</div>
      </Card>
    );
  }

  console.log(data.choices[0].message.content);
  const aiResponse = data.choices[0].message.content;

  return (
    <Card sx={{ padding: 2 }}>
      <Typography variant="h6">Description </Typography>
      <Divider sx={{ margin: "5px 0", background: "rgba(255,255,255,0.2)" }} />
      <Typography variant="body1">{aiResponse}</Typography>
    </Card>
  );
}

export default DescriptionCard;
