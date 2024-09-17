import axios from "axios";

const API_MOCKDRINKS_URL = "https://www.thecocktaildb.com/api/json/v1/1";

// Hämta alla alkoholfria drinkar
const fetchMocktails = async () => {
  try {
    console.log("Fetching mocktails from API...");

    const response = await axios.get(
      `${API_MOCKDRINKS_URL}/filter.php?a=Non_Alcoholic`
    );

    // Logga hela svaret för att kontrollera strukturen
    console.log("API Response:", response);

    // Kontrollera att data finns och har rätt format
    if (!response.data || !response.data.drinks) {
      console.error("Invalid data format received from API.");
      return [];
    }

    // Logga drinkarna innan de bearbetas
    console.log("Drinks data before processing:", response.data.drinks);

    const mocktails = response.data.drinks.map((drink) => ({
      id: drink.idDrink,
      name: drink.strDrink,
      thumbnail: drink.strDrinkThumb,
      completed: false,
    }));

    // Logga bearbetade mocktails
    console.log("Processed mocktails data:", mocktails);

    return mocktails;
  } catch (error) {
    console.error("Error fetching mocktails:", error);
    return [];
  }
};

export default fetchMocktails;
