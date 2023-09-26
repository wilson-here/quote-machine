import { FaQuoteLeft } from "react-icons/fa";

function QuoteContent({ quote, color }) {
  return (
    <div className="quote-content" style={{ color }}>
      <h1 className="quote-content__quote">
        <FaQuoteLeft className="quote-content__icon" />
        {quote.quote}
      </h1>
      <span className="quote-content__author">- {quote.author}</span>
    </div>
  );
}

export default QuoteContent;
