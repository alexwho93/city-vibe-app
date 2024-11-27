import { Container, CircularProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CityImageCard from "@/components/CityPage/CityImageCard";
import MapCard from "@/components/CityPage/MapCard";
import CityStatisticsCard from "@/components/CityPage/CityStatisticsCard";
import WeatherCard from "@/components/CityPage/WeatherCard";
import DescriptionCard from "@/components/CityPage/DescriptionCard";
import { getCityStatistics } from "@/services/actions";
import SaveToFavoritesButton from "@/components/CityPage/SaveToFavoritesButton";
import { auth } from "@/services/auth";
import { getCityImage } from "@/services/actions";

export default async function CityPage({ params }) {
  const { cityName } = await params;
  const formattedCityName = formatCityName(cityName);

  const data = await getCityStatistics(formattedCityName);

  // Fetch the session
  const session = await auth();
  const userId = session?.user?.id;
  console.log("Full session:", JSON.stringify(session, null, 2));

  if (!(data?.results?.length > 0)) {
    return (
      <Container maxWidth="lg" sx={centerStyle}>
        <Typography variant="h4">No city data.</Typography>
      </Container>
    );
  }

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

  const imgData = await getCityImage(cityName);

  const cityImage = imgData?.photos?.[0]?.src?.large;

  const cityData = {
    name,
    country,
    countryCode: country_code,
    population,
    latitude,
    longitude,
    elevation,
    timezone,
    imgLink: cityImage,
  };

  // console.log("City statistics data is: ", data);

  return (
    <Container maxWidth="lg" sx={{ padding: "1rem 0" }}>
      <SaveToFavoritesButton userId={userId} cityData={cityData} />
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <CityImageCard
            countryCode={country_code}
            countryName={country}
            cityName={name}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <MapCard latitude={latitude} longitude={longitude} />
        </Grid>
        <Grid size={{ xs: 4, md: 2 }}>
          <WeatherCard latitude={latitude} longitude={longitude} />
        </Grid>

        <Grid size={{ xs: 8, md: 4 }}>
          <CityStatisticsCard
            population={population}
            longitude={longitude}
            latitude={latitude}
            elevation={elevation}
            timezone={timezone}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <DescriptionCard cityName={name} />
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
