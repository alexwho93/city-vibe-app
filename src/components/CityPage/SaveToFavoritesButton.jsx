"use client";

import { Button, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useEffect } from "react";
import { toggleFavoriteCity, checkFavoriteStatus } from "@/services/actions";
import WarningSnackbar from "./WarningSnackbar";

export default function SaveToFavoritesButton({ cityData, userId }) {
  const [isSaved, setIsSaved] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  // console.log("userId is:", userId);
  // console.log("cityData is: ", cityData);
  useEffect(() => {
    const checkStatus = async () => {
      if (userId) {
        const result = await checkFavoriteStatus(cityData.cityId, userId);
        if (!result.error) {
          setIsSaved(result.isFavorite);
        }
      }
    };
    checkStatus();
  }, [cityData.cityId, userId]);

  const handleSaveToFavorites = async () => {
    if (userId) {
      const result = await toggleFavoriteCity(cityData, userId);
      if (result.success) {
        setIsSaved(result.action === "added");
      } else {
        console.error("Failed to toggle favorite city");
      }
    } else {
      setOpenSnackBar(true);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", marginBottom: 2 }}>
      <Button
        variant="contained"
        startIcon={<FavoriteIcon />}
        onClick={handleSaveToFavorites}
        color={isSaved ? "secondary" : "primary"}
      >
        {isSaved ? "Remove from Favorites" : "Save to Favorites"}
      </Button>
      <WarningSnackbar
        open={openSnackBar}
        setOpen={setOpenSnackBar}
        errorMessage={"You need to Login to save to favorites!"}
      />
    </Box>
  );
}
