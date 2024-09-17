import React from "react";

const FilterMocktails = ({ filterStatus, setFilterStatus }) => {
  return (
    <div className="filters">
      <button
        onClick={() => setFilterStatus("all")}
        className={filterStatus === "all" ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => setFilterStatus("non-completed")}
        className={filterStatus === "non-completed" ? "active" : ""}
      >
        Non-completed
      </button>
      <button
        onClick={() => setFilterStatus("completed")}
        className={filterStatus === "completed" ? "active" : ""}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterMocktails;
