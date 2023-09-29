import { transition } from "../App";

function NewQuoteButton({ onClick, color }) {
  return (
    <button
      className="quote-btns__new-quote"
      onClick={onClick}
      style={{ backgroundColor: color, transition }}
      id="new-quote"
    >
      New quote
    </button>
  );
}

export default NewQuoteButton;
