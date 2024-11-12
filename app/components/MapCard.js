import { Card } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

function MapCard({ latitude, longitude }) {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const [mapError, setMapError] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_API_KEY;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [longitude, latitude],
      zoom: 10,
    });

    mapRef.current.on("error", (error) => {
      setMapError(error);
    });

    return () => {
      mapRef.current.remove();
    };
  }, [latitude, longitude]);

  if (mapError) {
    return <Card sx={cardStyles}>Error loading map!</Card>;
  }

  return <Card sx={{ aspectRatio: "1/1" }} ref={mapContainerRef}></Card>;
}

const cardStyles = {
  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "1rem 0",
  aspectRatio: "1/1",
};

export default MapCard;
