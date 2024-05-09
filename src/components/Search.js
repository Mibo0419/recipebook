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
    };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <FaSearch/>
        <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
      </div>
    </form>
  );
}

export default Search;
