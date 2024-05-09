import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_kEY}&cuisine=${name}`);
        const recipes = await data.json();

        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);
    // console.log(params.type);

  return (
    <div>
        {cuisine.map((item) => {
            return(
                <div>
                    <Link to={'/recipe/' + item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                    </Link>
                </div>
            )
        })}
    </div>
  )
}

export default Cuisine