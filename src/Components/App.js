// src/Components/App.js
import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import MocktailList from "./MocktailList"; // Kontrollera stavningen och importvägen
import fetchMocktails from "../APIs/fetchMocktails"; // Kontrollera importvägen

const App = () => {
  const [mocktails, setMocktails] = useState([]);
  const [filteredMocktails, setFilteredMocktails] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMocktails = async () => {
      try {
        const mocktailsData = await fetchMocktails();
        setMocktails(mocktailsData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch mocktails");
        setLoading(false);
      }
    };
    getMocktails();
  }, []);

  useEffect(() => {
    if (filterStatus === "completed") {
      setFilteredMocktails(mocktails.filter((drink) => drink.completed));
    } else if (filterStatus === "non-completed") {
      setFilteredMocktails(mocktails.filter((drink) => !drink.completed));
    } else {
      setFilteredMocktails(mocktails);
    }
  }, [mocktails, filterStatus]);
  const addMocktail = async (name) => {
    try {
      // Hämta listan över mocktails från API:t
      const mocktailsData = await fetchMocktails();

      // Sök efter mocktailen med det angivna namnet
      const newMocktail = mocktailsData.find(
        (mocktail) => mocktail.name.toLowerCase() === name.toLowerCase()
      );

      // Kontrollera om mocktailen hittades
      if (newMocktail) {
        // Lägg till den nya mocktailen i den befintliga listan
        setMocktails([...mocktails, { ...newMocktail, completed: false }]);
      } else {
        // Visa en alert om mocktailen inte hittades
        alert("Mocktail not found. Please check the name and try again.");
      }
    } catch (err) {
      // Hantera eventuella fel
      console.error("Error adding mocktail:", err);
    }
  };

  const toggleComplete = (id) => {
    setMocktails(
      mocktails.map((mocktail) =>
        mocktail.id === id
          ? { ...mocktail, completed: !mocktail.completed }
          : mocktail
      )
    );
  };

  const deleteMocktail = (id) => {
    setMocktails(mocktails.filter((mocktail) => mocktail.id !== id));
  };

  const clearAll = () => {
    setMocktails([]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="App">
      <h1>Mark's To-drink list</h1>
      <SearchBar addMocktail={addMocktail} />{" "}
      {/* Lägg till SearchBar-komponenten */}
      <div className="filters">
        <button onClick={() => setFilterStatus("all")}>All</button>
        <button onClick={() => setFilterStatus("non-completed")}>
          Non-completed
        </button>
        <button onClick={() => setFilterStatus("completed")}>Completed</button>
      </div>
      <MocktailList
        mocktails={filteredMocktails}
        toggleComplete={toggleComplete}
        deleteMocktail={deleteMocktail}
      />
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
};

export default App;
