import { Card } from "@mui/material";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

function MapCard({ lat, lon }) {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWFib25nIiwiYSI6ImNrMm9qN2tiYTEwc3ozZG41emx6bW9uZnQifQ.PhojWq3UwsAlPB7LBvJiTw";

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [lon, lat], // [lon, lat]
      zoom: 10,
    });
  });

  return <Card sx={{ aspectRatio: "1/1" }} ref={mapContainerRef}></Card>;
  // return <Card sx={{ aspectRatio: "1/1" }}></Card>;
}

export default MapCard;
