"use client";

import { use } from "react";
import { Container, CircularProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CityImageCard from "@components/CityImageCard";
import MapCard from "@components/MapCard";
import CityStatisticsCard from "@components/CityStatisticsCard";
import WeatherCard from "@components/WeatherCard";
import DescriptionCard from "@components/DescriptionCard";
import { useCityStatistics } from "@services/queries";
import zIndex from "@mui/material/styles/zIndex";

export default function CityPage({ params }) {
  const cityName = use(params).cityName;

  const { data, error, isLoading } = useCityStatistics(
    formatCityName(cityName)
  );

  if (isLoading) {
    return (
      <Container maxWidth="lg" sx={centerStyle}>
        <CircularProgress size={50} />
      </Container>
    );
  }

  if (error || !(data?.results?.length > 0)) {
    return (
      <Container maxWidth="lg" sx={centerStyle}>
        <Typography variant="h4">No city data.</Typography>
      </Container>
    );
  }

  console.log(data);

  const {
    name,
    latitude,
    longitude,
    country,
    country_code,
    population,
    elevation,
    timezone,
  } = data.results[0];

  console.log(data);

  return (
    <Container maxWidth="lg" sx={{ marginTop: "30px" }}>
      <Grid container spacing={2}>
        <Grid size={8}>
          <CityImageCard
            cityImage={"/cityimg.jpg"}
            countryCode={country_code}
            countryName={country}
            cityName={name}
          />
        </Grid>
        <Grid size={4}>
          <MapCard latitude={latitude} longitude={longitude} />
        </Grid>
        <Grid size={2}>
          <WeatherCard latitude={latitude} longitude={longitude}></WeatherCard>
        </Grid>
        <Grid size={6}>
          <DescriptionCard cityName={name} />
        </Grid>
        <Grid size={4}>
          <CityStatisticsCard
            population={population}
            longitude={longitude}
            latitude={latitude}
            elevation={elevation}
            timezone={timezone}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

function formatCityName(cityName) {
  return cityName.replace(/-/g, " ");
}

const centerStyle = {
  display: "flex",
  height: "80vh",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  zIndex: "-99",
};
