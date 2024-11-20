"use client";

import { Button, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useEffect } from "react";
import { toggleFavoriteCity, checkFavoriteStatus } from "@/services/actions";

export default function SaveToFavoritesButton({ cityData, userId }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      if (userId) {
        const result = await checkFavoriteStatus(cityData.name, userId);
        if (!result.error) {
          setIsSaved(result.isFavorite);
        }
      }
    };
    checkStatus();
  }, [cityData.name, userId]);

  const handleSaveToFavorites = async () => {
    const result = await toggleFavoriteCity(cityData, userId);
    if (result.success) {
      setIsSaved(result.action === "added");
    } else {
      console.error("Failed to toggle favorite city");
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
    </Box>
  );
}
