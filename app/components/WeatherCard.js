import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
  Avatar,
} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Image from "next/image";

function WeatherCard({
  temperature = 12,
  condition = "good",
  icon = "/sun.gif",
  feelsLike = 8,
}) {
  return (
    <Card
      sx={{
        // background:
        //   "linear-gradient(180deg, rgba(129,181,244,1) 0%, rgba(42,94,156,1) 92%)",
        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
        border: "none",
      }}
    >
      <Stack
        spacing={1}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        {/* <Avatar
          alt="Remy Sharp"
          src={icon}
          sx={{ width: 50, height: 50, padding: "-20px" }}
        /> */}
        <Typography variant="h3" component="div">
          {temperature}°
        </Typography>
        <Typography
          variant="body2"
          component="div"
          sx={{
            background: "rgba(255,255,255,0.5)",
            padding: "2px 12px",
            borderRadius: "1rem",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Feels like: {temperature}°
        </Typography>
        <Typography variant="h5" component="div">
          Sunny
        </Typography>
      </Stack>
    </Card>
  );
}

export default WeatherCard;
