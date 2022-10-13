import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);


  const createRecipes = (newRecipe) => {
    setRecipes([...recipes, newRecipe])
  } 

  const handleDelete= (idToDelete) =>{
    console.log(idToDelete);
      const deleteRecipes= recipes.filter((recipe,index)=> index !== idToDelete);
      console.log(deleteRecipes);
      setRecipes(deleteRecipes);
    }

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleDelete={handleDelete}/>
      <RecipeCreate createRecipes={createRecipes} />
    </div>
  );
}

export default App;
