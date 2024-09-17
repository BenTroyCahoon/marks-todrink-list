import React from "react";

const MocktailItem = ({ mocktail, toggleComplete, deleteMocktail }) => {
  return (
    <div>
      <h2>{mocktail.name}</h2>
      <img src={mocktail.thumbnail} alt={mocktail.name} />
      <button onClick={() => toggleComplete(mocktail.id)}>
        Toggle Complete
      </button>
      <button onClick={() => deleteMocktail(mocktail.id)}>Delete</button>
    </div>
  );
};

export default MocktailItem;
