import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../components/PopularRecipes.css";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function PopularRecipes() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopularRecipes();
  }, []);

  const getPopularRecipes = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_kEY}&number=10`
      );
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));

      setPopular(data.recipes);
      console.log(data);
    }
  };

  return (
    <div>
      <div id="wrapper">
        <h2>Popular Recipes</h2>
        <Splide
          options={{
            perPage: 4,
            pagination: false,
            drag: "free",
            gap: "5px"
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide>
                <div id="popular-card" key={recipe.id}>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default PopularRecipes;
