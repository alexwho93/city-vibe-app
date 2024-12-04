import { useState, useEffect } from "react";
import { getGeocodeReverse } from "@/services/queries";
import { getIpInfo } from "@/services/queries";

export function useGeolocation() {
  const [location, setLocation] = useState(null);
  const [locationInfo, setLocationInfo] = useState({
    name: "Fetching location...",
    id: null,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        (err) => {
          fetchIpBasedLocation();
          console.log(err);
        }
      );
    } else {
      fetchIpBasedLocation();
      console.log("Geolocation is not supported by your browser");
    }
  }, []);

  const fetchIpBasedLocation = async () => {
    try {
      const response = await getIpInfo();
      const data = await response.json();
      await fetchCityId(data.city);
    } catch (error) {
      console.log("Error fetching IP-based location:", error);
    }
  };

  const fetchCityId = async (cityName) => {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setLocationInfo({
          name: cityName,
          id: data.results[0].id,
        });
      } else {
        setLocationInfo({
          name: cityName,
          id: null,
        });
      }
    } catch (error) {
      console.log("Error fetching city ID:", error);
      setLocationInfo({
        name: cityName,
        id: null,
      });
    }
  };

  useEffect(() => {
    if (location) {
      const fetchReverseGeocode = async () => {
        try {
          const response = await getGeocodeReverse(
            location.latitude,
            location.longitude
          );
          const data = await response.json();
          if (data.features && data.features.length > 0) {
            const place = data.features[0].properties.name;
            await fetchCityId(place.replace(/-/g, " "));
          } else {
            setLocationInfo({
              name: "Location not found",
              id: null,
            });
          }
        } catch (error) {
          console.log("Error fetching location name");
        }
      };

      fetchReverseGeocode();
    }
  }, [location]);

  return locationInfo;
}
