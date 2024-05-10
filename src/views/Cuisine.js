import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../views/Cuisine.css";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_kEY}&cuisine=${name}`
    );
    const recipes = await data.json();

    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);
  // console.log(params.type);

  return (
    <div>
      <h1>{params.type}</h1>
      <div id="cuisine-wrapper">
        {cuisine.map((item) => {
          return (
            <div className="single-cuisine">
              <Link to={"/recipe/" + item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cuisine;
