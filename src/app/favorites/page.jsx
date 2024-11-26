import CityCard from "@/components/FavoritesPage/CityCard";
import { Stack, Container, Typography } from "@mui/material";
import { getFavoriteCities } from "@/services/actions";
import { auth } from "@/services/auth";

export default async function Favorites() {
  const session = await auth();
  const userId = session?.user?.id;

  const result = await getFavoriteCities(userId);

  const favoriteCities = result.favorites.map((fav) => fav.city);

  console.log("Favorites cities:", favoriteCities);

  return (
    <Container maxWidth="lg" sx={{ marginTop: "30px" }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ textAlign: "center", mb: 4, color: "primary.main" }}
      >
        Your Favorite Cities
      </Typography>
      <Stack
        spacing={{ xs: 1, md: 3 }}
        direction="row"
        useFlexGap
        sx={{
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {favoriteCities.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </Stack>
    </Container>
  );
}
