import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Homepage from './Pages/Homepage';
import RecipesPage from './Pages/RecipesPage';
import AddRecipePage from './Pages/AddRecipePage';
import About from './Pages/About';
import NavigationBar from './Components/NavigationBar';
import RecipePage from './Pages/RecipePage';
import Searched from './Pages/Searched';

export default function App() {
  const API = "https://63e6e5dd15d793f46f87f0f3.mockapi.io/recipes";

  //will and can set the list of received Recipes from the API 
  const [recipeList, setRecipeList] = useState([]);
  //will be used to determine ID on forms to target correct API entry
  const [id, setId] = useState("");
  //featured recipe displayed on the homepage 
  const [featuredRecipe, setFeaturedRecipe] = useState({});
  //used to determine when to set the featured recipe 
  const [isReady, setIsReady] = useState(null);

  //this is what loads the information from the API - fetches data and sets appropriate states
  useEffect(() => {
    const refreshInfo = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setRecipeList(data);
      setIsReady(data);
      console.log(data);
    }
    refreshInfo();
  }, []);

  //second useEFfect to run setting a featured recipe once the page loaded successfully 
  useEffect(() => {
    if (isReady === null) {
      return;
    }
    getFeaturedRecipe();
  }, [isReady]);

  //function to determine a random recipe from the recipeList received from API 
  const getFeaturedRecipe = async () => {
    const index = [Math.floor(Math.random() * recipeList.length)]
    console.log(index)
    const response = await fetch(API + "/" + index)
    const data = await response.json();
    setFeaturedRecipe(data);
  }

  //fetches the API data and sets recipeList without page load 
  const getRecipes = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setRecipeList(data);
    console.log(data);
  };

  //function to POST an entry to the api. String manipulation used to change strings to arrays
  const addRecipeClick = async (newRecipe) => {
    newRecipe.ingredients = newRecipe.ingredients.split(",").map(items => items.trim())
    newRecipe.steps = newRecipe.steps.split(",").map(items => items.trim())

    await setRecipeList(recipeList.concat(newRecipe))
    await fetch(API, {
      method: "POST",
      body: JSON.stringify(newRecipe),
      headers: { "Content-Type": "application/json" },
    })
    getRecipes();
    console.log(recipeList);
  }

  //similar to the addRecipeClick except utilizes id to determine which entry in the API to target
  const submitEditedRecipe = async (editedRecipe) => {
    editedRecipe.ingredients = editedRecipe.ingredients.split(",").map(items => items.trim())
    editedRecipe.steps = editedRecipe.steps.split(",").map(items => items.trim())

    console.log(editedRecipe);
    await fetch(API + "/" + id,
      {
        method: "PUT",
        body: JSON.stringify(editedRecipe),
        headers: { "Content-Type": "application/json" },
      })
    getRecipes();
    console.log(recipeList);
  }

  //deletes a chosen recipe from the api utilizing the recipeId 
  const deleteRecipe = async (recipeId) => {
    const resourceID = (recipeId);
    const response = await fetch(
      API + "/" + resourceID,
      { method: "DELETE" }
    )
    console.log("The recipe has been removed");
    getRecipes();
  }

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Homepage recipeList={recipeList} API={API} featuredRecipe={featuredRecipe} />}></Route>
        <Route path="/recipes" element={<RecipesPage recipeList={recipeList} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/new" element={<AddRecipePage addRecipeClick={addRecipeClick} />}></Route>
        <Route path="/recipes/:recipeId" element={<RecipePage recipeList={recipeList} deleteRecipe={deleteRecipe} submitEditedRecipe={submitEditedRecipe} setId={setId} />} />
        <Route path="/searched/:search" element={<Searched />} />
      </Routes>
    </div >
  );
}

