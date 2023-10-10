import { useState } from "react";
import quotes from "../public/quotes.json";
import "./styles/App.scss";
import QuoteContent from "./components/QuoteContent";
import ShareButtons from "./components/ShareButtons";
import NewQuoteButton from "./components/NewQuoteButton";
import CopyRight from "./components/CopyRight";
import useBackgroundImage from "./hook/useBackgroundImage";

export const transition = "all 1s";

function App() {
  const getRandomQuote = () =>
    quotes[Math.floor(Math.random() * quotes.length)];
  const [quote, setNewQuote] = useState(getRandomQuote());
  const { bgImageUrl, fetchRandomBgImage } = useBackgroundImage();
  const handleClick = () => {
    setNewQuote(getRandomQuote);
    fetchRandomBgImage();
  };

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
        }}
      />
      <CopyRight />
    </div>
  );
}

export default App;
