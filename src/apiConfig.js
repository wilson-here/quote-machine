const API_KEY = "qNaB51OISzxAAwDI-xiDHkTXvMdFU0qWAKWG8nB-elQ"; // Replace with your actual API key
const UNSPLASH_API_URL = "https://api.unsplash.com/photos/random";
const UNSPLASH_API_HEADERS = {
  Authorization: `Client-ID ${API_KEY}`,
};
const UNSPLASH_API_PARAMS = {
  orientation: "landscape",
  topics: "Bn-DjrcBrwo,6sMVjTLSkeQ,Fzo3zuOHN6w",
};

export { API_KEY, UNSPLASH_API_URL, UNSPLASH_API_HEADERS, UNSPLASH_API_PARAMS };
