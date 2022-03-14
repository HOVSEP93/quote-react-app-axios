import React, { useState } from "react";
import axios from "axios";

import "./App.css";

const App = () => {
  const [theAuthor, setTheAuthor] = useState("");
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setQuote(res.data.content);
        setTheAuthor(res.data.author);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <button onClick={getQuote} className="button">
        Get Quote
      </button>

      <br />

      {quote && <q>{quote}</q>}
      {theAuthor && <p>-{theAuthor}</p>}
    </React.Fragment>
  );
};

export default App;
