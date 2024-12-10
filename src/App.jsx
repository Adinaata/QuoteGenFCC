import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState(0);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getRandomIndex = (max) => Math.floor(Math.random() * max);

  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  const fetching = async (randomIndex) => {
    const URL =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    try {
      const response = await fetch(URL);
      const data = await response.json();
      const quotes = data.quotes;
      setQuote(quotes[randomIndex].quote);
      setAuthor(quotes[randomIndex].author);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const randomIndex = getRandomIndex(102);
    fetching(randomIndex);
    setColor(getRandomIndex(12));
  }, []);

  const handleNew = () => {
    const randomIndex = getRandomIndex(102);
    fetching(randomIndex);
    setColor(getRandomIndex(12));
  };

  return (
    <div id="container" style={{ backgroundColor: colors[color] }}>
      <div id="quote-box">
        <p id="text" style={{ color: colors[color] }}>
          <span>&quot;</span>
          {quote}{" "}
        </p>
        <p id="author" style={{ color: colors[color] }}>
          - {author}
        </p>
        <div id="spread">
          <a
            href="_blank"
            id="tweet-quote"
            style={{ backgroundColor: colors[color] }}
          >
            Tweet
          </a>
          <button
            onClick={handleNew}
            id="new-quote"
            style={{ backgroundColor: colors[color] }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
