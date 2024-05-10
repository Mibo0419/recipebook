import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import "../components/Category.css";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <div id="category-wrapper">
      <div id="inner-div">
        <h2>Quick Cuisine Picks</h2>
        <div id="links">
          <div className="single-link">
            <NavLink to={"/cuisine/Italian"}>
              <FaPizzaSlice />
              <h4>Italian</h4>
            </NavLink>
          </div>
          <div className="single-link">
            <NavLink to={"/cuisine/American"}>
              <FaHamburger />
              <h4>American</h4>
            </NavLink>
          </div>
          <div className="single-link">
            <NavLink to={"/cuisine/Thai"}>
              <GiNoodles />
              <h4>Thai</h4>
            </NavLink>
          </div>
          <div className="single-link">
            <NavLink to={"/cuisine/Japanese"}>
              <GiChopsticks />
              <h4>Japanese</h4>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
