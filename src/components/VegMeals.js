import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../components/VegMeals.css";
import "@splidejs/splide/dist/css/splide.min.css";

function VegMeals() {
  const [vegMeals, setVegMeals] = useState([]);

  useEffect(() => {
    getVegMeals();
  }, []);

  const getVegMeals = async () => {
    const check = localStorage.getItem('vegetarian');
    if(check) {
      setVegMeals(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_kEY}&number=10&include-tags="vegetarian"`
      );
      const data = await api.json();

      localStorage.setItem('vegetarian', JSON.stringify(data.recipes));

      setVegMeals(data.recipes);
      console.log(data);
    }


  };

  return (
    <div>
      <div id="wrapper">
        <h3>Vegetarian Meals</h3>
        <Splide options={{
          perPage: 4, arrows: false, pagination: false, drag: 'free'
        }}>
        {vegMeals.map((recipe) => {
            return (
              <SplideSlide>
              <div id="card" key={recipe.id}>
                <p>{recipe.title}</p>
                <p>{recipe.readyInMinutes}</p>
                <img src={recipe.image} alt={recipe.title}/>
              </div>  
              </SplideSlide>
            )
        })
        }
        </Splide>
      </div>
    </div>
  )
}

export default VegMeals;
