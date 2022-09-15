import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

const SelectBy = () => {
  return (
    <section className="select">
      <div className="select__view">
        <div className="select__gridview select__gridview--active">
          <BsFillGridFill />
        </div>
        <div className="select__listview--active">
          <BsList />
        </div>
      </div>

      <div className="select__price-range">
        <div>0</div>
        <input type="range" min="0" max="100" name="radio"></input>
      </div>

      <div className="select__price">
        <label htmlFor="sort_price">Sort by:</label>
        <select
          name="sort_price"
          id="sort_price"
          className="select__price-order"
        >
          <option value="price-lowest">Price (Lowest)</option>
          <option value="price-highest">Price (Highest)</option>
          <option value="name-a">Name (A-Z)</option>
          <option value="name-z">Name (Z - A)</option>
        </select>
      </div>
    </section>
  );
};

export default SelectBy;
