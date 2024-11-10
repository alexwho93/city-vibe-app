import useSWR from "swr";
import { useState, useEffect } from "react";

const MAPBOX_API_KEY =
  "pk.eyJ1IjoibWFib25nIiwiYSI6ImNrMm9qN2tiYTEwc3ozZG41emx6bW9uZnQifQ.PhojWq3UwsAlPB7LBvJiTw";

export function useGeocodeSearch(searchInput) {
  return useSWR(
    `https://api.mapbox.com/search/geocode/v6/forward?q=${searchInput}&proximity=ip&types=place&language=en&access_token=${MAPBOX_API_KEY}`
  );
}

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
