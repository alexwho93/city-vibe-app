import React from "react";
import { Stack } from "@mui/material";
import { getRandomCities } from "@/services/actions";
import CityCard from "@/components/FavoritesPage/CityCard";

async function RandomCityList() {
  let cities = [];
  try {
    const result = await getRandomCities(3);
    if (result.success) {
      cities = result.cities;
    } else {
      console.error(result.error);
    }
  } catch (error) {
    console.error("Error fetching cities:", error);
  }

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
