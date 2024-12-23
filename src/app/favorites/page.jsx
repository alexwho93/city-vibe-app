import CityCard from "@/components/FavoritesPage/CityCard";
import { Stack, Container, Typography, Box } from "@mui/material";
import { getFavoriteCities } from "@/services/actions";
import { auth } from "@/services/auth";
import { redirect } from "next/navigation";

export default async function Favorites() {
  const session = await auth();

  if (!session) {
    redirect("/auth/signin?callbackUrl=/favorites");
  }

  const userId = session?.user?.id;

  const result = await getFavoriteCities(userId);

  const favoriteCities = result.favorites.map((fav) => fav.city);

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
      {favoriteCities.length === 0 ? (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="h6" color="text.secondary">
            You haven&apos;t added any favorite cities yet.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Explore cities and add them to your favorites!
          </Typography>
        </Box>
      ) : (
        <Stack
          spacing={{ xs: 1, md: 3 }}
          direction="row"
          useFlexGap
          sx={{
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {favoriteCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </Stack>
      )}
    </Container>
  );
}
