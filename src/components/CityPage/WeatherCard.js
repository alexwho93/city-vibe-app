import { Card, Typography, Stack } from "@mui/material";
import { getWeather } from "@/services/actions";

async function WeatherCard({ latitude, longitude }) {
  const data = await getWeather(latitude, longitude);

  if (!data || !data.current) {
    return (
      <Card sx={cardStyles}>
        <Typography variant="body1">Invalid weather data</Typography>
      </Card>
    );
  }

  const { temperature, apparent_temperature } = data?.current;

  return (
    <Card sx={cardStyles}>
      <Stack spacing={1} sx={stackStyles}>
        <Typography variant="h6">Temperature</Typography>
        <Typography variant="h3">{temperature}°C</Typography>
        <Typography variant="body2" sx={feelsLikeStyles}>
          Feels like: {apparent_temperature}°C
        </Typography>
      </Stack>
    </Card>
  );
}

const cardStyles = {
  // boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
  // border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "1rem 0",
};

const stackStyles = {
  height: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem",
};

const feelsLikeStyles = {
  background: "rgba(255,255,255,0.5)",
  padding: "2px 12px",
  borderRadius: "1rem",
  color: "rgba(255,255,255,0.7)",
};

export default WeatherCard;
