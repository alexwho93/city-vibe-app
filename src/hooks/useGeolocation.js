import { useState, useEffect } from "react";
import { getGeocodeReverse } from "@/services/queries";
import { getIpInfo } from "@/services/queries";

export function useGeolocation() {
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState("Fetching location...");

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
      setLocationName(data.city);
    } catch (error) {
      console.log("Error fetching IP-based location:", error);
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
            setLocationName(place);
          } else {
            setLocationName("Location not found");
          }
        } catch (error) {
          console.log("Error fetching location name");
        }
      };

      fetchReverseGeocode();
    }
  }, [location]);

  return locationName;
}
