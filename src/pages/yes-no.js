import React, { useRef } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function YesNo() {
  const Navigate = useNavigate();
  const noButtonRef = useRef(null);

  const moveButton = () => {
    const noButton = noButtonRef.current;
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
  
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
  
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
  
    noButton.style.position = "absolute";
    noButton.style.left = `${Math.min(maxX, x)}px`;
    noButton.style.top = `${Math.min(maxY, y)}px`;
  };

  const nextPage = () => {
    Navigate("/yes");
  };

  return (
    <div className="container">
      <div>
        <h1 className="header_text"> will you be mine?</h1>
      </div>
      <div className="gif_container">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
          alt="Cute animated illustration"
        />
      </div>
      <div className="buttons">
        <button className="btn one" id="yesButton" onClick={nextPage}>
          Yes
        </button>
        <button
          className="btn"
          id="noButton"
          ref={noButtonRef}
          onMouseOver={moveButton}
          onClick={moveButton}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default YesNo;
