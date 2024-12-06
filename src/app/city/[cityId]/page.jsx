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
import { getCityDescription } from "@/services/actions";

export default async function CityPage({ params }) {
  const { cityId } = await params;

  // Fetch city data in order
  const statisticsData = await getCityStatistics(cityId);

  if (statisticsData.error) {
    return (
      <Container maxWidth="lg" sx={centerStyle}>
        <Typography variant="h4">No city data.</Typography>
      </Container>
    );
  }

  // Only proceed with other fetches if statisticsData is valid
  const imgData = await getCityImage(statisticsData.name);
  const descriptionData = await getCityDescription(statisticsData.name);
  const session = await auth();

  // Extract relevant data
  const imgLink = imgData?.photos?.[0]?.src?.large;
  const cityDescription = descriptionData?.choices?.[0]?.message?.content;
  const userId = session?.user?.id;

  // Uncomment for debugging
  // console.log("city statistics: ", JSON.stringify(statisticsData, null, 2));
  // console.log("Full session:", JSON.stringify(session, null, 2));

  const cityData = {
    cityId: cityId,
    name: statisticsData.name,
    description: cityDescription,
    country: statisticsData.country,
    countryCode: statisticsData.country_code,
    population: statisticsData.population,
    latitude: statisticsData.latitude,
    longitude: statisticsData.longitude,
    elevation: statisticsData.elevation,
    timezone: statisticsData.timezone,
    imgLink: imgLink,
  };

  console.log("city data is", JSON.stringify(cityData, null, 2));

  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: {
          xs: "0.5rem 1.5rem",
          md: "1rem ",
          lg: "1.5rem 0rem",
        },
      }}
    >
      <SaveToFavoritesButton userId={userId} cityData={cityData} />
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <CityImageCard
            countryCode={cityData.countryCode}
            countryName={cityData.country}
            cityName={cityData.name}
            imgLink={cityData.imgLink}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <MapCard
            latitude={cityData.latitude}
            longitude={cityData.longitude}
          />
        </Grid>
        <Grid size={{ xs: 4, md: 2 }}>
          <WeatherCard
            latitude={cityData.latitude}
            longitude={cityData.longitude}
          />
        </Grid>

        <Grid size={{ xs: 8, md: 4 }}>
          <CityStatisticsCard statisticsCityData={statisticsData} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <DescriptionCard description={cityDescription} />
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
