import { useState } from "react";
import quotes from "../public/quotes.json";
import "./styles/App.scss";
import QuoteContent from "./components/QuoteContent";
import ShareButtons from "./components/ShareButtons";
import NewQuoteButton from "./components/NewQuoteButton";
import CopyRight from "./components/CopyRight";
import $ from "jquery";

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

  const handleClick = () => {
    setNewQuote(getRandomQuote);
    setNewColor(getRandomColor);
  };

  $(document).ready(function () {
    $("body").css("backgroundColor", color);
  });

  return (
    <>
      <div className="quote">
        <QuoteContent quote={quote} color={color} />
        <div className="quote-btns">
          <ShareButtons quote={quote} color={color} />
          <NewQuoteButton onClick={handleClick} color={color} />
        </div>
      </div>
      <CopyRight />
    </>
  );
}

export default App;
