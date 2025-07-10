import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import quotes from "./assets/quotes.json";
import { colors } from "./assets/colors";

function App() {
  const randomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };
  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const [quote, setQuote] = useState(randomQuote());
  const [bgcolor, setBgColor] = useState(randomColor());

  function changeQuote() {
    setQuote(randomQuote());
    setBgColor(randomColor());
  }
  useEffect(() => {
    document.body.style.backgroundColor = bgcolor;
  }, [bgcolor]);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen min-w-screen  ">
        <div
          id="quote-box"
          className=" m-20 p-10 transition-colors  duration-1000 delay-100 ease-in-out rounded-sm max-w-[700px]"
          style={{ backgroundColor: "white", color: bgcolor }}
        >
          <h3 id="text" className="text-2xl">
            ❝{quote.quote}❞
          </h3>
          <h5 id="author" className="text-right text-xl p-2">
            -{quote.author}
          </h5>
          <div>
            <a
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `"${quote.quote}" - ${quote.author}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              <button
                style={{ backgroundColor: bgcolor }}
                className="
            m-1.5 focus:outline-none transition-colors  duration-1000 delay-100 ease-in-out"
              >
                𝕏
              </button>
            </a>
            <button
              style={{ backgroundColor: bgcolor, color: "white" }}
              className="
            m-1.5 focus:outline-none transition-colors  duration-1000 delay-100 ease-in-out"
              id="new-quote"
              onClick={() => changeQuote()}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
