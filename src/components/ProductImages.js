import React, { useState } from "react";

const ProductImages = ({ images }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <figure className="detail__fig">
      <img src={main} className="detail__img" alt="" />
      <div className="detail__gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image}
              alt=""
              key={index}
              onClick={() => setMain(images[index])}
              className={`${main === image ? "detail__active-image" : null}`}
            />
          );
        })}
      </div>
    </figure>
  );
};

export default ProductImages;
