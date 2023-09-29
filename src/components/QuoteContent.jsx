import { FaQuoteLeft } from "react-icons/fa";
import { transition } from "../App";

function QuoteContent({ quote, color }) {
  return (
    <div className="quote-content" style={{ color, transition }}>
      <h1 className="quote-content__quote" id="text">
        <FaQuoteLeft className="quote-content__icon" />
        {quote.quote}
      </h1>
      <span className="quote-content__author" id="author">
        - {quote.author}
      </span>
    </div>
  );
}

export default QuoteContent;
