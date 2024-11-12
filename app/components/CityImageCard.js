import { Card, Typography, Box, CircularProgress } from "@mui/material";
import Image from "next/image";
import { useCityImage } from "@services/queries";

function CityImageCard({ countryCode, countryName, cityName }) {
  const { data, error, isLoading } = useCityImage(cityName);

  if (isLoading) {
    return (
      <Card sx={cardStyles}>
        <CircularProgress />
      </Card>
    );
  }
  const isData = !error || data;
  const cityImage = data?.photos?.[0]?.src?.large;

  return (
    <Card sx={{ border: "none", height: "100%" }}>
      <Box
        sx={{
          ...backgroundStyle,
          backgroundImage: isData ? `url(${cityImage})` : "",
        }}
        alt="city image"
      >
        <Box sx={overlayStyle}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Image
              src={`https://flagsapi.com/${countryCode}/flat/32.png`}
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
    </Card>
  );
}

const cardStyles = {
  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "1rem 0",
};

const overlayStyle = {
  zIndex: "99",
  background:
    "linear-gradient(90deg, rgba(0,0,0,0.7) 43%, rgba(0,0,0,0.4) 92%)",
  padding: "0.9rem",
};

const backgroundStyle = {
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  position: "relative",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
};

export default CityImageCard;
