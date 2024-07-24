import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

function StarRatings() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [stars, setStars] = useState(5);

  function handleClick(getCurrentIndex) {
    console.log(":", getCurrentIndex);
    setRating(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  function starVal() {
    return (event) => {
      setStars(Number(event.target.value));
    };
  }
  return (
    <>
      <input
        style={{
          boxSizing: "content-box",
          width: "10%",
          border: "solid",
          margin: "0 auto",
          padding: "0",
          backgroundColor: "skyblue",
          outline: "none",
          color: "green",
          borderRadius: "5px",
        }}
        type="number"
        min={1}
        value={stars}
        onChange={starVal()}
      />

      <div className="star-ratings">
        {[...Array(stars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            /> // Example: rendering a star symbol for each iteration
          );
        })}
      </div>
    </>
  );
}

export default StarRatings;
