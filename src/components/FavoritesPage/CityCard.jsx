import { Card, Typography, Box, IconButton, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { toKebabCase } from "@/lib/utils";

function CityCard({ city }) {
  return (
    <Card sx={{ border: "none", height: "200px", minWidth: "350px" }}>
      <Box
        sx={{
          ...backgroundStyle,
          backgroundImage: city?.imgLink ? `url(${city.imgLink})` : "",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              margin: "5px ",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              color: "black",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.7)",
              },
            }}
          >
            {city?.name && (
              <Link href={`/city/${toKebabCase(city.name)}`}>
                View City Information
              </Link>
            )}
          </Button>
        </Box>
        <Box sx={overlayStyleBottom}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Image
              src={`https://flagsapi.com/${city?.countryCode}/flat/32.png`}
              alt={`${city?.country} Flag`}
              width={20}
              height={20}
              style={{ marginRight: "8px" }}
            />
            <Typography variant="subtitle2">{city?.country}</Typography>
          </Box>
          <Typography variant="h5" textAlign="left">
            {city?.name}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

const overlayStyleBottom = {
  zIndex: "99",
  background: "linear-gradient(0deg, rgba(0,0,0,0.7) 43%, rgba(0,0,0,0.4) 92%)",
  padding: "0.9rem",
};

const overlayStyleTop = {
  zIndex: "99",
  background:
    "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 92%)",
  padding: "0.2rem",
};

const backgroundStyle = {
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  position: "relative",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export default CityCard;
