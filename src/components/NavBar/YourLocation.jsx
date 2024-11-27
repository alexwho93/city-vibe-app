import MyLocationIcon from "@mui/icons-material/MyLocation";
import {
  Typography,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import Link from "next/link";
import { useGeolocation } from "@/hooks/useGeolocation";

export default function YourLocation() {
  const locationName = useGeolocation();

  return (
    <Link href={locationName ? `/city/${toKebabCase(locationName)}` : ""}>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar
            sx={{
              bgcolor: "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MyLocationIcon
              sx={{
                color: "text.primary",
              }}
            />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={<Typography variant="body1">Your Location</Typography>}
          secondary={locationName}
        />
      </ListItemButton>
    </Link>
  );
}

const toKebabCase = (str) => {
  return str.toLowerCase().replace(/\s+/g, "-");
};
