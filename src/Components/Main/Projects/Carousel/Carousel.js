import "./Carousel.css";


import React, { useState, useEffect } from "react";

export default function Carousel(props) {
  console.log(props.projects);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = props.projects.images.map((item) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = item.img;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(imagePromises)
        .then(() => {
          setIsLoaded(true);
        })
        .catch((error) => {
          console.error("Error preloading images:", error);
        });
    };

    preloadImages();
  }, [props.projects.images]);

  const data = props.projects.images.map((item) => (
    <div className="carousel__face" key={item.id}>
      <img src={item.img} alt="img" className={isLoaded ? "loaded" : ""} />
    </div>
  ));

  return (
    <div className="container">
      <div className="carousel">{data}</div>
    </div>
  );
}
