import React from 'react'
import { useState, useEffect } from 'react';

export default function Contexts() {
    const [recipeList, setRecipeList] = useState([]);
    const API = "https://63e6e5dd15d793f46f87f0f3.mockapi.io/recipes";

    const [codedRecipeList, setCodedRecipeList] = useState();
    const recipes = [
        {
            id: 0,
            name: "Lemon Shrimp Linguine",
            contributor: "Nysha",
            allergens: "GF",
            ingredients: ["linguine", "shrimp", "lemons"]
        },
        {
            id: 1,
            name: "Sourdough",
            contributor: "Kristina",
            allergens: "DF",
            ingredients: ["flour, salt"]
        }
    ]

    let setRecipes = () => {
        setCodedRecipeList(recipes);
        console.log(codedRecipeList);
    }

    let getRecipes = () => {
        console.log(codedRecipeList);
    }

    const clickTest = () => {
        console.log("click");
    }


    /*     useEffect(() => {
            const refreshInfo = async () => {
                const response = await fetch(API);
                const data = await response.json();
                setRecipeList(data);
                console.log(recipeList);
            }
            refreshInfo();
        }, []); */

    /*     const getRecipes = async () => {
            const response = await fetch(API);
            const data = await response.json();
            setRecipeList(data);
            console.log(recipeList);
        } */
    /*  
    const deleteRecipe = async () => {
        const resourceID = (8);
        const response = await fetch(
            API + "/" + resourceID,
            { method: "DELETE" }
        )
        console.log("Book has been deleted");
        getRecipes();
    }
 */


    return (
        <div>

        </div>
    )
}


/*  
import React from 'react'
import { useState, useEffect } from 'react';

export default function Contexts() {
    const [recipeList, setRecipeList] = useState([]);
    const API = "https://63e6e5dd15d793f46f87f0f3.mockapi.io/recipes";

    const [codedRecipeList, setCodedRecipeList] = useState();
    const recipes = [
        {
            id: 0,
            name: "Lemon Shrimp Linguine",
            contributor: "Nysha",
            allergens: "GF",
            ingredients: ["linguine", "shrimp", "lemons"]
        },
        {
            id: 1,
            name: "Sourdough",
            contributor: "Kristina",
            allergens: "DF",
            ingredients: ["flour, salt"]
        }
    ]

    let setRecipes = () => {
        setCodedRecipeList(recipes);
        console.log(codedRecipeList);
    }

    let getRecipes = () => {
        console.log(codedRecipeList);
    }

    const clickTest = () => {
        console.log("click");
    }


   useEffect(() => {
        const refreshInfo = async () => {
            const response = await fetch(API);
            const data = await response.json();
            setRecipeList(data);
            console.log(recipeList);
        }
        refreshInfo();
    }, []); 

const getRecipes = async () => {
        const response = await fetch(API);
        const data = await response.json();
        setRecipeList(data);
        console.log(recipeList);
    } 
 
const deleteRecipe = async () => {
    const resourceID = (8);
    const response = await fetch(
        API + "/" + resourceID,
        { method: "DELETE" }
    )
    console.log("Book has been deleted");
    getRecipes();
}


return (
    <div>

    </div>
)
}
*/