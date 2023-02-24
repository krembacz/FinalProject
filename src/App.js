import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import RecipesPage from './Pages/RecipesPage';
import AddRecipePage from './Pages/AddRecipePage';
import About from './Pages/About';
import NavigationBar from './Components/NavigationBar';
import RecipePage from './Pages/RecipePage';
import { useState, useEffect } from 'react';
import Searched from './Pages/Searched';

export default function App() {
  const API = "https://63e6e5dd15d793f46f87f0f3.mockapi.io/recipes";
  const [recipeList, setRecipeList] = useState([]);
  const [id, setId] = useState("");
  const [newestRecipe, setNewestRecipe] = useState({});
  const [featuredRecipe, setFeaturedRecipe] = useState({});
  const [isReady, setIsReady] = useState(null);

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

  useEffect(() => {
    if (isReady === null) {
      return;
    }
    getFeaturedRecipe();
  }, [isReady]);

  const getFeaturedRecipe = async () => {
    /*     const index = recipeList.length - 1; */
    const index = [Math.floor(Math.random() * recipeList.length)]
    console.log(index)
    const response = await fetch(API + "/" + index)
    const data = await response.json();
    setFeaturedRecipe(data);
  }

  const getRecipes = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setRecipeList(data);
    console.log(data);
  };

  const addRecipeClick = async (newRecipe) => {
    newRecipe.ingredients = newRecipe.ingredients.split(",").map(items => items.trim())
    newRecipe.steps = newRecipe.steps.split(",").map(items => items.trim())

    await setRecipeList(recipeList.concat(newRecipe))
    await fetch(API, {
      method: "POST",
      body: JSON.stringify(newRecipe),
      headers: { "Content-Type": "application/json" },
    })
    console.log(recipeList);
    getRecipes();
  }


  const submitEditedRecipe = async (editedRecipe) => {
    console.log(editedRecipe);
    await fetch(API + "/" + id,
      {
        method: "PUT",
        body: JSON.stringify(editedRecipe),
        headers: { "Content-Type": "application/json" },
      })
    console.log(recipeList);
    getRecipes();
  }

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

