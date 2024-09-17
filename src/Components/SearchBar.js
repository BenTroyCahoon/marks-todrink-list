import React, { useState } from "react";

function SearchBar({ addMocktail }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addMocktail(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new mocktail..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default SearchBar;
