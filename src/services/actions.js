"use server";

import { cache } from "react";
import prisma from "@/lib/prisma";

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
const PEXELS_API_KEY = process.env.PEXELS_API_KEY;
const GROQ_API_KEY = process.env.GROQ_API_KEY;

export const geocodeSearch = cache(async (searchInput) => {
  const response = await fetch(
    `https://api.mapbox.com/search/geocode/v6/forward?q=${searchInput}&proximity=ip&types=place&language=en&access_token=${MAPBOX_API_KEY}`
  );
  return response.json();
});

// export const getCityStatistics = cache(async (city) => {
//   const response = await fetch(
//     `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
//   );
//   return response.json();
// });

export const getCityStatistics = cache(async (cityId) => {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/get?id=${cityId}`
  );
  return response.json();
});

export const getWeather = cache(async (latitude, longitude) => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature,apparent_temperature`
  );
  return response.json();
});

export const getCityImage = cache(async (cityName) => {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${cityName}&per_page=1&orientation=landscape`,
    {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    }
  );
  return response.json();
});

export const getCityDescription = cache(async (cityName) => {
  const userMessage = `Write a 60 word description about ${cityName} city`;

  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [{ role: "user", content: userMessage }],
      }),
    }
  );
  return response.json();
});

// Database Actions
export async function toggleFavoriteCity(cityData, userId) {
  try {
    const existingFavorite = await prisma.favoriteCities.findFirst({
      where: {
        userId: userId,
        city: { cityId: cityData.cityId },
      },
    });
    if (existingFavorite) {
      // If it exists, remove it
      await prisma.favoriteCities.delete({
        where: { id: existingFavorite.id },
      });
      return { success: true, action: "removed" };
    } else {
      // If it doesn't exist, add it
      await prisma.favoriteCities.create({
        data: {
          user: { connect: { id: userId } },
          city: {
            connectOrCreate: {
              where: { cityId: cityData.cityId },
              create: {
                ...cityData,
              },
            },
          },
        },
      });

      return { success: true, action: "added" };
    }
  } catch (error) {
    console.error("Error:", error);
    return { success: false, error: error.message };
  }
}

export async function checkFavoriteStatus(cityId, userId) {
  try {
    const favorite = await prisma.favoriteCities.findFirst({
      where: {
        userId: userId,
        city: { cityId: cityId },
      },
    });
    return { isFavorite: !!favorite };
  } catch (error) {
    console.error("Error checking favorite status:", error);
    return { error: error.message };
  }
}

export async function getFavoriteCities(userId) {
  try {
    const favorites = await prisma.favoriteCities.findMany({
      where: { userId: userId },
      include: { city: true },
    });
    return { success: true, favorites };
  } catch (error) {
    console.error("Error fetching favorite cities:", error);
    return { success: false, error: error.message };
  }
}

export async function searchCitiesByNames(cityNames) {
  try {
    const cities = await prisma.city.findMany({
      where: {
        name: {
          in: cityNames,
        },
      },
    });

    return { success: true, cities };
  } catch (error) {
    console.error("Error fetching cities:", error);
    return { success: false, error: error.message };
  }
}

export async function getRandomCities(count) {
  try {
    const cities = await prisma.city.findMany({
      take: count,
      orderBy: {
        id: "asc", // This is just to ensure consistent ordering
      },
      // This is the key part that introduces randomness
      skip: Math.floor(Math.random() * (await prisma.city.count())),
    });

    return { success: true, cities };
  } catch (error) {
    console.error("Error fetching random cities:", error);
    return { success: false, error: error.message };
  }
}
