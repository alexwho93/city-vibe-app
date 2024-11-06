import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
});

const StyledCard = styled(Card)({
  // maxWidth: "40%",
  // margin: "16px auto",
  border: "none",
  height: "100%",
});

function CityImageCard({ cityImage, flagUrl, countryName, cityName }) {
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
        {/* <Overlay /> */}
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
    </StyledCard>
  );
}

export default CityImageCard;
