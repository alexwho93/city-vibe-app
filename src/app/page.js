"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Typography,
  Button,
  Stack,
  Paper,
  Box,
  Container,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CityCard from "@/components/FavoritesPage/CityCard";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  borderRadius: theme.shape.borderRadius,
  transition: "background 0.3s",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.2)",
  },
}));

const GradientBackground = styled(Box)({
  minHeight: "100vh",
  // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  padding: "2rem",
});

export default function Root() {
  const session = true;

  return (
    <GradientBackground>
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            align="center"
            color="white"
          >
            Welcome to CityVibe
          </Typography>

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" paragraph color="white">
                Discover the pulse of cities around the world. Explore local
                hotspots, find hidden gems, and experience the true vibe of each
                unique destination.
              </Typography>
              <Box mt={2}>
                <Button
                  component={Link}
                  href="/search"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ mr: 2 }}
                >
                  Explore Cities
                </Button>
                {!session && (
                  <Button
                    component={Link}
                    href="/auth/signup"
                    variant="outlined"
                    color="inherit"
                    size="large"
                  >
                    Sign Up
                  </Button>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                position="relative"
                height={400}
                borderRadius={2}
                overflow="hidden"
              >
                <Image
                  src="/city-illustration.jpg"
                  alt="City Illustration"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
          </Grid>

          {/* <Box mt={8}>
            <Typography variant="h4" gutterBottom align="center" color="white">
              Popular Cities
            </Typography>
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
              {["New York", "Tokyo", "Paris"].map((city) => (
                <CityCard key={city} cityName={city} />
              ))}
            </Stack>
          </Box> */}
        </Box>
      </Container>
    </GradientBackground>
  );
}
