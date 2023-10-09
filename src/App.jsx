import { useState, useEffect } from "react";
import axios from "axios";
import quotes from "../public/quotes.json";
import "./styles/App.scss";
import QuoteContent from "./components/QuoteContent";
import ShareButtons from "./components/ShareButtons";
import NewQuoteButton from "./components/NewQuoteButton";
import SaveAsWallpaper from "./components/SaveAsWallpaper";
import CopyRight from "./components/CopyRight";
export const transition = "all 1s";

function App() {
  const getRandomQuote = () =>
    quotes[Math.floor(Math.random() * quotes.length)];

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 128);
    const g = Math.floor(Math.random() * 128);
    const b = Math.floor(Math.random() * 128);
    return `rgb(${r},${g},${b})`;
  };

  const [quote, setNewQuote] = useState(getRandomQuote());
  const [color, setNewColor] = useState(getRandomColor());
  const [bgImageUrl, setBgImageUrl] = useState("");

  const fetchRandomBgImage = async () => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/photos/random",
        {
          headers: {
            Authorization:
              "Client-ID UxkR02mxmTz6AXxqw2JMjZpEYk7eHGXJkDVyLRA06bs",
          },
          params: {
            orientation: "landscape",
          },
        }
      );

      const imageUrl = response.data.urls.regular;
      console.log(imageUrl);
      setBgImageUrl(imageUrl);
    } catch (error) {
      console.error("Error fetching background image:", error);
    }
  };

  const handleClick = () => {
    setNewQuote(getRandomQuote);
    setNewColor(getRandomColor);
  };

  useEffect(() => {
    // Fetch a random background image when the component mounts
    fetchRandomBgImage();
  }, []); // Empty dependency array to ensure it runs once on mount

  return (
    <div
      className="quote-container"
      style={{ backgroundImage: `url(${bgImageUrl})`, transition }}
    >
      <div className="quote" id="quote-box">
        <QuoteContent quote={quote} />
      </div>
      <div className="quote-btns">
        <ShareButtons quote={quote} />
      </div>
      <NewQuoteButton
        onClick={() => {
          handleClick();
          fetchRandomBgImage();
        }}
      />
      {/* <SaveAsWallpaper /> */}
      <CopyRight />
    </div>
  );
}

export default App;
