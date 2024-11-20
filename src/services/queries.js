import useSWR from "swr";
import { useState, useEffect } from "react";

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
const PEXELS_API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;
const GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY;

export function useGeocodeSearch(searchInput) {
  return useSWR(
    `https://api.mapbox.com/search/geocode/v6/forward?q=${searchInput}&proximity=ip&types=place&language=en&access_token=${MAPBOX_API_KEY}`
  );
}

export function useCityStatistics(city) {
  return useSWR(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
  );
}

export function useWeather(latitude, longitude) {
  return useSWR(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature,apparent_temperature`
  );
}

export function useCityImage(cityName) {
  const url = `https://api.pexels.com/v1/search?query=${cityName}&per_page=1&orientation=landscape`;

  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    }).then((res) => res.json());

  return useSWR(url, fetcher);
}

export function useGroqAI(userMessage) {
  const fetcher = (url) =>
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama3-8b-819",
        messages: [{ role: "user", content: userMessage }],
      }),
    }).then((res) => res.json());

  return useSWR("https://api.groq.com/openai/v1/chat/completions", fetcher);
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
