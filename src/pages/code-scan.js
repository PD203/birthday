import React from "react";
import "./style.css";
import code from "../Image/code.png";

function Codescan() {
  const scrollToCode = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">
      <div>
        <h1 className="header_text">Yeeeyyyy!!</h1>
      </div>
      <div className="gif_container">
        <img
          src="https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif"
          alt="Cute animated illustration"
        />
      </div>
      <div className="buttons">
        <button className="btn one" id="scrollButton" onClick={scrollToCode}>
          Scroll
        </button>
      </div>
      <div className="code-container">
        <img id="code" src={code} alt="Cute animated illustration" />
      </div>
    </div>
  );
}

export default Codescan;
