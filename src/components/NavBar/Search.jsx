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
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useGeocodeSearch, useDebounce } from "../../services/queries";
import Link from "next/link";
import YourLocation from "./YourLocation";
import { toKebabCase } from "@/lib/utils";
import { alpha } from "@mui/material/styles";

const SearchResultsList = ({ searchResults }) => (
  <List dense sx={{ width: "100%" }}>
    {searchResults.map((result) => (
      <Link key={result.id} href={`/city/${result.id}`}>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              src={`https://flagsapi.com/${result.country_code}/flat/64.png`}
              variant="square"
              alt="contry-flag"
            />
          </ListItemAvatar>

          <ListItemText
            primary={<Typography variant="body1">{result.name}</Typography>}
            secondary={result.country}
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
  // console.log("search data: " + JSON.stringify(data, null, 2));
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
      <InputBase
        sx={StyledInputBase}
        id="search"
        placeholder="Search…"
        endAdornment={
          <InputAdornment position="end">
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
        onFocus={() => setIsDropdownOpen(true)}
        onInput={handleInput}
        value={searchInput}
      />

      <Popper
        sx={StyledPopper}
        disablePortal
        open={isDropdownOpen}
        anchorEl={searchInputRef.current}
        placement="bottom"
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <List dense sx={{ width: "100%" }}>
                <YourLocation />
                {data?.results?.length > 0 ? (
                  <SearchResultsList searchResults={data.results} />
                ) : (
                  <Typography variant="body1" sx={{ padding: "1rem" }}>
                    No results found.
                  </Typography>
                )}
              </List>
            </Paper>
          </Fade>
        )}
      </Popper>
    </FormControl>
  );
}

const StyledInputBase = {
  padding: "10px 12px",
  borderRadius: "12px",
  backgroundColor: "action.hover",
  border: "1px solid",
  borderColor: "divider",
  transition: "all 0.2s",
  "&:hover": {
    borderColor: "text.primary",
  },
  "&.Mui-focused": {
    borderColor: "primary.main",
    boxShadow: (theme) =>
      `0 0 0 2px ${alpha(theme.palette.primary.main, 0.25)}`,
  },
  "& input": {
    padding: 0,
    height: "1.4375em",
    fontSize: "1rem",
  },
  "& input::placeholder": {
    color: "text.secondary",
    opacity: 1,
  },
};

const StyledPopper = {
  width: "100%",
  minWidth: "max-content",
  zIndex: 1000,
  "& .MuiPaper-root": {
    padding: "1rem",
    marginTop: "5px",
    borderRadius: "0.5rem",
  },
};
