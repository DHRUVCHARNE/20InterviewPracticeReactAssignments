import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
function LoadMoreButton() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  async function fetchProducts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console.log(result);

      if (result && result.products && result.products.length) {
        setProducts((prev) => [...prev, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (products && products.length === 100) {
      setDisable(true);
    } else setDisable(false);
  }, [products]);

  useEffect(() => {
    if (loading) return <div>Loading Data!</div>;
    fetchProducts();
  }, [count]);

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        {disable ? <h2>End of Products</h2> : null}
        <button
          disabled={disable}
          onClick={() => {
            setCount(count + 1);
            fetchProducts;
          }}
        >
          Load More
        </button>
        <button
          onClick={() => {
            setCount(0);
            setProducts([]);
            fetchProducts;
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default LoadMoreButton;
