import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HeightIcon from "@mui/icons-material/Height";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function CityStatisticsCard({ statisticsCityData }) {
  const statisticsData = [
    {
      icon: <PeopleIcon />,
      title: "Population",
      statistic: formatNumberWithCommas(statisticsCityData.population || "-"),
    },
    {
      icon: <LocationOnIcon />,
      title: "Position",
      statistic: `${formatLongitude(
        statisticsCityData.longitude || "-"
      )}, ${formatLatitude(statisticsCityData.latitude || "-")}`,
    },
    {
      icon: <HeightIcon />,
      title: "Elevation",
      statistic: (statisticsCityData.elevation || "-") + " m",
    },
    {
      icon: <AccessTimeIcon />,
      title: "Timezone",
      statistic: statisticsCityData.timezone || "-",
    },
  ];
  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          minHeight: "220px",
        }}
      >
        <List>
          {statisticsData.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
              <ListItemText
                sx={{ textAlign: "right" }}
                primary={item.statistic}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Card>
  );
}

function formatLatitude(latitude) {
  const direction = latitude >= 0 ? "N" : "S";
  return `${Math.abs(latitude).toFixed(2)}° ${direction}`;
}

function formatLongitude(longitude) {
  const direction = longitude >= 0 ? "E" : "W";
  return `${Math.abs(longitude).toFixed(2)}° ${direction}`;
}

function formatNumberWithCommas(number) {
  return number?.toLocaleString();
}

export default CityStatisticsCard;
