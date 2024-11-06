import React from "react";
import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PeopleIcon from "@mui/icons-material/People";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const ListTextRight = styled(ListItemText)({
  textAlign: "right",
});

const StyledListItemIcon = styled(ListItemIcon)({
  "& svg": {
    color: "rgba(255, 255, 255, 0.6)",
  },
});

function CityStatisticsCard({ cityStatistics }) {
  return (
    <Card>
      <List>
        <ListItem>
          <StyledListItemIcon>
            <PeopleIcon />
          </StyledListItemIcon>
          <ListItemText primary="Population" />
          <ListTextRight primary={cityStatistics.population} />
        </ListItem>
        <ListItem>
          <StyledListItemIcon>
            <LocationOnIcon />
          </StyledListItemIcon>
          <ListItemText primary="Latitude" />
          <ListTextRight primary={cityStatistics.latitude} />
        </ListItem>
        <ListItem>
          <StyledListItemIcon>
            <LocationOnIcon />
          </StyledListItemIcon>
          <ListItemText primary="Longitude" />
          <ListTextRight primary={cityStatistics.longitude} />
        </ListItem>
        <ListItem>
          <StyledListItemIcon>
            <PublicIcon />
          </StyledListItemIcon>
          <ListItemText primary="Capital" />
          <ListTextRight primary={cityStatistics.capital ? "Yes" : "No"} />
        </ListItem>
        <ListItem>
          <StyledListItemIcon>
            <AttachMoneyIcon />
          </StyledListItemIcon>
          <ListItemText primary="Currency" />
          <ListTextRight primary={cityStatistics.currency} />
        </ListItem>
      </List>
    </Card>
  );
}

export default CityStatisticsCard;
