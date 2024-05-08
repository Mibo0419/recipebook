import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../components/Search.css";

function Search() {
    const [input, setInput] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
    }

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
