import { useState, useEffect } from "react";
import axios from "axios";
import {
  UNSPLASH_API_URL,
  UNSPLASH_API_HEADERS,
  UNSPLASH_API_PARAMS,
} from "../apiConfig.js";
const getRandomImageUrl = async () => {
  try {
    const response = await axios.get(UNSPLASH_API_URL, {
      headers: UNSPLASH_API_HEADERS,
      params: UNSPLASH_API_PARAMS,
    });
    return response.data.urls.regular;
  } catch (error) {
    console.error("Error fetching images:", error);
    return "";
  }
};
const useBackgroundImage = () => {
  const [bgImageUrl, setBgImageUrl] = useState("");

  const fetchRandomBgImage = async () => {
    const imageUrl = await getRandomImageUrl();
    setBgImageUrl(imageUrl);
  };
  useEffect(() => {
    fetchRandomBgImage();
  }, []); // Empty dependency array to ensure it runs once on mount

  return { bgImageUrl, fetchRandomBgImage };
};

export default useBackgroundImage;
