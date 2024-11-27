import { Typography, Box, Container } from "@mui/material";
import RandomCityList from "@/components/Home/RandomCityList";

export default function Root() {
  return (
    <Container maxWidth="lg">
      <Box py="3rem" textAlign="center">
        <Typography
          variant="h2"
          my="1.5rem"
          color="primary.main"
          fontWeight="bold"
        >
          Explore the World&apos;s Urban Rhythms
        </Typography>
        <Container maxWidth="md">
          <Typography variant="h6">
            Immerse yourself in the unique atmosphere of cities around the
            globe. Discover local hotspots, uncover hidden gems, and experience
            the authentic pulse of each destination. Your urban adventure starts
            here!
          </Typography>
        </Container>
        <Box mt="3rem">
          <Typography variant="h4" color="primary.light" my="1.5rem">
            Popular Cities:
          </Typography>
          <RandomCityList />
        </Box>
      </Box>
    </Container>
  );
}
