import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../contexts/filter_context";
import Sort from "./Sort";
import Filter from "./Filter";

const SelectBy = () => {
  const { gridView, listView, grid_view } = useFilterContext();

  return (
    <section className="select">
      <div className="select__view">
        <div>
          <BsFillGridFill
            onClick={() => gridView()}
            className={`${grid_view ? "active--view" : null}`}
          />
        </div>
        <div>
          <BsList
            onClick={() => listView()}
            className={`${!grid_view ? "active--view" : null}`}
            style={{ fontSize: "2.6rem" }}
          />
        </div>
      </div>

      {/* <div className="select__price-range">
        <div>0</div>
        <input type="range" min="0" max="100" name="radio"></input>
      </div> */}
      <Filter />
      <Sort />
    </section>
  );
};

export default SelectBy;
