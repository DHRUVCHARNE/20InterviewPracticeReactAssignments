import React from "react";
import useFetch from "../Usefetch/index.jsx";
import { useRef } from "react";
function Scrolltopbottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

    const bottomRef = useRef(null);
    const topRef = useRef(null);

  if (pending) {
    return <h1>Loading Data !</h1>;
  }
  if (error) {
    return <h1>{error},Error Occured!</h1>;
  }

  function Totop() {
   topRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function Tobottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <h2>Scroll to Top and Bottom</h2>
      <button ref={topRef} onClick={Tobottom}>Scroll To Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={Totop}>Scroll To Top</button>
      <div ref={bottomRef}></div>
    </div>
  );
}

export default Scrolltopbottom;
