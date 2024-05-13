import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../views/Recipe.css";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("summary");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_kEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <div id="recipe-wrapper">
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} />
      </div>
      <div id="info-div">
        <button
          className={activeTab === "summary" ? "active" : ""}
          onClick={() => setActiveTab("summary")}
        >
          Summary
        </button>
        <button
          className={activeTab === "directions" ? "active" : ""}
          onClick={() => setActiveTab("directions")}
        >
          Directions
        </button>
        {activeTab === "summary" && (
          <div id="summary-div">
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
          </div>
        )}
        {activeTab === "directions" && (
          <div id="overall-div">
            <div id="ingredients-div">
              <h3>Recipe Ingredients:</h3>
              <ul>
                {details.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ul>
            </div>
            <div id="instructions-div">
              <h3>Instructions:</h3>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recipe;
