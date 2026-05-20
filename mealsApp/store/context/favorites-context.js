import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  // Esse é o objeto que será passado em useContext
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  function addFavorite(id) {
    setFavoriteMeals((currentFavIds) => [...currentFavIds, id]); // Mantem os ids presentes e adiciona mais um
  }

  function removeFavorite(id) {
    setFavoriteMeals(
      (currentFavIds) => currentFavIds.filter((mealId) => mealId !== id), // Remove apenas o id passado como parâmetro
    );
  }

  const values = {
    ids: favoriteMeals,
    addFavorite: addFavorite, // identificador: função
    removeFavorite: removeFavorite, // identificador: função
  };

  return (
    <FavoriteContext.Provider value={values}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoritesContextProvider;
