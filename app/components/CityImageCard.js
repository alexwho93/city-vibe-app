import React from "react";
import { Card, Typography, Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useCityImage } from "@services/queries";

const cardStyles = {
  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "1rem 0",
};

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
});

const StyledCard = styled(Card)({
  // maxWidth: "40%",
  // margin: "16px auto",
  border: "none",
  height: "100%",
});

function CityImageCard({ flagUrl, countryName, cityName }) {
  const { data, error, isLoading } = useCityImage(cityName);

  if (isLoading) {
    return (
      <Card sx={cardStyles}>
        <CircularProgress />
      </Card>
    );
  }

  if (error || !data.photos[0].src.large) {
    return (
      <Card sx={cardStyles}>
        <div>Error loading.</div>
      </Card>
    );
  }

  const cityImage = data.photos[0].src.large;

  return (
    <StyledCard>
      <Box
        sx={{
          backgroundImage: `url(${cityImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          position: "relative",
          color: "white",
          padding: "16px",

          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
        }}
      >
        <Overlay />
        <Box sx={{ zIndex: "99" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Image
              src={`${flagUrl}`}
              alt={`${countryName} Flag`}
              width={20}
              height={20}
              style={{ marginRight: "8px" }}
            />
            <Typography variant="subtitle1">{countryName}</Typography>
          </Box>
          <Typography variant="h3">{cityName}</Typography>
        </Box>
      </Box>
    </StyledCard>
  );
}

export default CityImageCard;
