import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function ImageSlider({
  url = "https://picsum.photos/v2/list",
  limit = 10,
  page = 1,
}) {
  const [images, setImages] = useState([]);
  const [slide, setSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [auto, setAuto] = useState(false);
  const intervalRef = useRef(null);
  const render = useRef(0);

  useEffect(() => {
    render.current = render.current + 1;
  });
  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      setErrorMsg(null);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg("Failed to fetch images");
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url, page, limit]);

  useEffect(() => {
    if (auto) {
      intervalRef.current = setInterval(() => {
        setSlide((prevSlide) =>
          prevSlide === images.length - 1 ? 0 : prevSlide + 1
        );
      }, 1500);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [auto, images.length]);

  function PrevSlide() {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  }

  function NextSlide() {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  }

  if (loading) return <div>Loading Data</div>;
  if (errorMsg !== null) return <div>Error: {errorMsg}</div>;

  return (
    <>
      <div className="container">
        <BsArrowLeftCircleFill
          onClick={PrevSlide}
          className="arrow arrow-left"
        />
        {images.length > 0
          ? images.map((item, index) => (
              <img
                key={item.id}
                alt={item.download_url}
                src={item.download_url}
                className={
                  slide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            ))
          : null}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={NextSlide}
        />
        <span className="circle-indicators">
          {images.length > 0
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={
                    slide === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  onClick={() => setSlide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
      <button type="button" onClick={() => setAuto(!auto)}>
        Auto Change: {auto ? "True" : "False"}
      </button>
      <p>Render Count: {render.current}</p>
    </>
  );
}

export default ImageSlider;
