import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_kEY}&query=${name}`);
        const recipes = await data.json();

        setSearchedRecipes(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])

  return (
    <div>
        {searchedRecipes.map((item) => {
            return (
                <div>
                    <img src={item.image} />
                    <h4>{item.title}</h4>
                </div>
            )
        })}
    </div>
  )
}

export default Searched