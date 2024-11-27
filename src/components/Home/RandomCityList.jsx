import React from "react";
import {
  Typography,
  Button,
  Stack,
  Paper,
  Box,
  Container,
  Grid,
} from "@mui/material";
import { searchCitiesByNames } from "@/services/actions";
import CityCard from "@/components/FavoritesPage/CityCard";

async function RandomCityList() {
  let cities = [];
  try {
    const result = await searchCitiesByNames(["New York", "Tokyo", "Paris"]);
    if (result.success) {
      cities = result.cities;
    } else {
      console.error(result.error);
    }
  } catch (error) {
    console.error("Error fetching cities:", error);
  }

  console.log("random component: ", cities);

  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      sx={{
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {cities.length > 0
        ? cities.map((city) => <CityCard key={city.id} city={city} />)
        : null}
    </Stack>
  );
}

export default RandomCityList;
