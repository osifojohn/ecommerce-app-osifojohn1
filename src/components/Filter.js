import React from "react";

const Filter = () => {
  return (
    <div className="select__price-range">
      <div>$0</div>
      <input name="price" type="range" min="10" max="20"></input>
    </div>
  );
};

export default Filter;
