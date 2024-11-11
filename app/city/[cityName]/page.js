"use client";
import { use } from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CityImageCard from "@components/CityImageCard";
import MapCard from "@components/MapCard";
import CityStatisticsCard from "@components/CityStatisticsCard";
import WeatherCard from "@components/WeatherCard";
import DescriptionCard from "@components/DescriptionCard";
import { useCityStatistics } from "@services/queries";

// const cityStatistics = {
//   name: "Piatra Neamt",
//   latitude: 46.9275,
//   longitude: 26.3708,
//   country: "RO",
//   population: 85055,
//   region: "N/A",
//   is_capital: false,
//   currency: "RON",
// };

export default function CityPage({ params }) {
  const cityName = use(params).cityName;

  const { data, error, isLoading } = useCityStatistics(
    formatCityName(cityName)
  );

  // console.log(data);

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading city statistics...</div>;
  }

  if (error) {
    return <div>Error loading city statistics.</div>;
  }

  // Access the data returned by the hook
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

  console.log(data.results[0]);

  return (
    <Container maxWidth="lg" sx={{ marginTop: "30px" }}>
      <Grid container spacing={2}>
        <Grid size={8}>
          <CityImageCard
            cityImage={"/cityimg.jpg"}
            flagUrl={`https://flagsapi.com/${country_code}/flat/32.png`}
            countryName={country}
            cityName={name}
          />
        </Grid>
        <Grid size={4}>
          <MapCard lat={latitude} lon={longitude} />
        </Grid>
        <Grid size={2}>
          <WeatherCard longitude={longitude} latitude={latitude}></WeatherCard>
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
