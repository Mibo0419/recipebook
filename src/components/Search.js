import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../components/Search.css";
import { useNavigate } from "react-router-dom";

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
        setInput("");
    };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <FaSearch id="search-icon"/>
        <input onChange={(e) => setInput(e.target.value)} type="text" value={input} placeholder="Search Recipes"/>
      </div>
    </form>
  );
}

export default Search;
