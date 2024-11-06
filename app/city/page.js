"use client";

import CityImageCard from "../components/CityImageCard";
import CityStatisticsCard from "../components/CityStatisticsCard";
import MapCard from "../components/MapCard";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import WeatherCard from "../components/WeatherCard";
import DescriptionCard from "../components/DescriptionCard";

const cityStatistics = {
  name: "Piatra Neamt",
  latitude: 46.9275,
  longitude: 26.3708,
  country: "RO",
  population: 85055,
  region: "N/A",
  is_capital: false,
  currency: "RON",
};

export default function CityPage() {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
    500: 1,
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: "30px" }}>
      <Grid container spacing={2}>
        <Grid size={8}>
          <CityImageCard
            cityImage={"/cityimg.jpg"}
            flagUrl={"/ro.png"}
            countryName="Romania"
            cityName="Piatra Neamt"
          />
        </Grid>
        <Grid size={4}>
          <MapCard
            lat={cityStatistics.latitude}
            lon={cityStatistics.longitude}
          />
        </Grid>
        <Grid size={2}>
          <WeatherCard></WeatherCard>
        </Grid>
        <Grid size={6}>
          <DescriptionCard />
        </Grid>
        <Grid size={4}>
          <CityStatisticsCard cityStatistics={cityStatistics} />
        </Grid>
      </Grid>
    </Container>
  );
}

{
  /* <Masonry
breakpointCols={breakpointColumnsObj}
className="my-masonry-grid"
columnClassName="my-masonry-grid_column"
></Masonry> */
}
