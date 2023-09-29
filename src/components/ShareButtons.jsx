import { FaTwitterSquare, FaTumblrSquare } from "react-icons/fa";
import { transition } from "../App";

function ShareButtons({ quote, color }) {
  const twitterShareText = `Check out this quote by ${quote.author}: "${quote.quote}"`;
  return (
    <div className="quote-btns__share">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          twitterShareText
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="quote-btns__share-btn"
        id="tweet-quote"
      >
        <FaTwitterSquare
          style={{
            fill: color,
            width: "3rem",
            height: "auto",
            transition,
          }}
        />
      </a>
      <a
        href={`https://www.tumblr.com/share/link?url=${encodeURIComponent(
          "https://quote-generator-wilson-here.netlify.app/"
        )}&name=${encodeURIComponent(
          "Quote of the Day"
        )}&description=${encodeURIComponent(
          `"${quote.quote}" - ${quote.author}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="quote-btns__share-btn"
      >
        <FaTumblrSquare
          style={{
            fill: color,
            width: "3rem",
            height: "auto",
            transition,
          }}
        />
      </a>
    </div>
  );
}

export default ShareButtons;
