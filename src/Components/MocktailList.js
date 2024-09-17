import React from "react";
import MocktailItem from "./MocktailItem";

function MocktailList({ mocktails, toggleComplete, deleteMocktail }) {
  return (
    <div className="mocktail-list">
      {mocktails.length > 0 ? (
        mocktails.map((mocktail) => (
          <MocktailItem
            key={mocktail.id}
            mocktail={mocktail}
            toggleComplete={toggleComplete}
            deleteMocktail={deleteMocktail}
          />
        ))
      ) : (
        <p>No mocktails to display</p>
      )}
    </div>
  );
}

export default MocktailList;
