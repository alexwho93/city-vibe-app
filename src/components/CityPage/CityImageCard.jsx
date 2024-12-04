import { Card, Typography, Box } from "@mui/material";
import Image from "next/image";

async function CityImageCard({ countryCode, countryName, cityName, imgLink }) {
  return (
    <Card sx={{ border: "none", height: "100%" }}>
      <Box
        sx={{
          ...backgroundStyle,
          backgroundImage: imgLink ? `url(${imgLink})` : "",
        }}
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
  minHeight: "350px",
  position: "relative",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
};

export default CityImageCard;
