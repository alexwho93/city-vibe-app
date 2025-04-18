"use client";

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

  return (
    <Card sx={cardStyles}>
      <div ref={mapContainerRef} style={mapContainerStyles}></div>
    </Card>
  );
}

const cardStyles = {
  position: "relative",
  width: "100%",
  minHeight: "350px",
  overflow: "hidden",
  paddingTop: "100%",
};

const mapContainerStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

export default MapCard;
