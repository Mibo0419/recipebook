import React, { useEffect, useState } from 'react'

function PopularRecipes() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopularRecipes();
  },[])

  const getPopularRecipes = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_kEY}&number=10`);
    const data = await api.json();
    console.log(data);

    setPopular(data.recipes);
  }




  return (
    <div>
      {popular.map((recipe) => {
        return (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  )
}

export default PopularRecipes