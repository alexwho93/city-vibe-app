"use client";

import { useRef, useState } from "react";
import {
  FormControl,
  InputAdornment,
  CircularProgress,
  Popper,
  Fade,
  Paper,
  InputBase,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { styled } from "@mui/material/styles";
import { useGeocodeSearch, useDebounce } from "../../services/queries";
import Link from "next/link";

const SearchResultsList = ({ searchResults }) => (
  <List dense sx={{ width: "100%" }}>
    {searchResults.map((feature) => (
      <Link
        key={feature.id}
        href={`/city/${toKebabCase(feature.properties.name)}`}
      >
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              src={`https://flagsapi.com/${feature.properties.context.country.country_code}/flat/64.png`}
              variant="square"
              alt="contry-flag"
            />
          </ListItemAvatar>

          <ListItemText
            primary={
              <Typography variant="body1">{feature.properties.name}</Typography>
            }
            secondary={feature.properties.context.country.name}
          />
        </ListItemButton>
      </Link>
    ))}
  </List>
);

export default function Search() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const searchInputRef = useRef(null);

  const { data, error, isLoading } = useGeocodeSearch(
    useDebounce(searchInput, 300)
  );

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
    setSearchInput("");
  };

  const handleInput = (e) => {
    setSearchInput(e.target.value);
    setIsDropdownOpen(true);
  };

  return (
    <FormControl ref={searchInputRef} sx={{ width: "100%" }}>
      <StyledInputBase
        id="search"
        placeholder="Search…"
        endAdornment={
          <InputAdornment position="end" sx={{ color: "text.primary" }}>
            {isLoading ? (
              <CircularProgress size={15} />
            ) : (
              <SearchRoundedIcon fontSize="small" />
            )}
          </InputAdornment>
        }
        inputProps={{
          "aria-label": "search",
        }}
        onBlur={handleDropdownClose}
        onInput={handleInput}
        value={searchInput}
      />

      <StyledPopper
        disablePortal
        open={isDropdownOpen}
        anchorEl={searchInputRef.current}
        placement="bottom"
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              {data?.features.length > 0 ? (
                <SearchResultsList searchResults={data.features} />
              ) : (
                <Typography variant="body1" sx={{ padding: "1rem" }}>
                  No results found.
                </Typography>
              )}
            </Paper>
          </Fade>
        )}
      </StyledPopper>
    </FormControl>
  );
}

const StyledInputBase = styled(InputBase)({
  padding: "6px 10px",
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  border: "1px solid transparent",
  borderRadius: "0.5rem",

  color: "text.primary",
  "&::placeholder": {
    color: "text.secondary",
  },
  "&:hover": {
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  "&.Mui-focused": {
    borderColor: "rgba(255, 255, 255, 0.75)",
  },
  "&::placeholder": {},
});

const StyledPopper = styled(Popper)(({ theme }) => ({
  width: "100%",
  zIndex: 1000,
  "& .MuiPaper-root": {
    backgroundColor: "rgb(34, 34, 34)",
    color: "white",
    padding: "1rem",
    marginTop: "5px",
    borderRadius: "0.5rem",
  },
}));

const toKebabCase = (str) => {
  return str.toLowerCase().replace(/\s+/g, "-");
};
