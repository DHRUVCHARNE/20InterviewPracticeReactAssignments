import React from "react";
import useOutsideClick from "./index.jsx";
import { useState, useRef } from "react";
function UseOnClickOutsideTest() {
    const [show, setShow] = useState(false);
    const ref = useRef();
    useOutsideClick(ref, () => setShow(false));

  return (
    <div>
      {show ? (
        <div ref ={ref}>
          <h1>This is a Random Content</h1>
          <p>To hide this Click outside this Content</p>
        </div>
      ) : (
        <button onClick={() => setShow(true)}>Show</button>
      )}
    </div>
  );
}

export default UseOnClickOutsideTest;
