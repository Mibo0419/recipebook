import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../components/PopularRecipes.css";
import "@splidejs/splide/dist/css/splide.min.css";

function PopularRecipes() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopularRecipes();
  }, []);

  const getPopularRecipes = async () => {
    const check = localStorage.getItem('popular');
    if(check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_kEY}&number=10`
      );
      const data = await api.json();

      localStorage.setItem('popular', JSON.stringify(data.recipes));

      setPopular(data.recipes);
      console.log(data);
    }
  };

  return (
    <div>
      <div id="wrapper">
        <h3>Popular Recipes</h3>
        <Splide options={{
          perPage: 4, arrows: false, pagination: false, drag: 'free'
        }}>
        {popular.map((recipe) => {
          return (
            <SplideSlide>
            <div id="card" key={recipe.id}>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
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
