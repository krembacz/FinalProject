import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import '../StyleSheets/HomePageStyle.css';
import RecipeCard from '../Components/RecipeCard';
import HeroBannerRecipe from '../Components/HeroBannerRecipe'

export default function Searched() {
    //separate page that displays when the search button is clicked to show results
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    //utilizes input from searchbar to filter API results and return them 
    const getSearched = async (name) => {
        const response = await fetch(`https://63e6e5dd15d793f46f87f0f3.mockapi.io/recipes?recipename=${name}`);
        const data = await response.json();
        setSearchedRecipes(data);
        console.log(data);
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);


    return (
        <div>
            <HeroBannerRecipe />
            <div>
                <div className="center">
                    <Row className="cards-container">
                        {searchedRecipes.map(recipe => <RecipeCard recipe={recipe} key={recipe.id} />)}
                    </Row>
                </div>
            </div>
        </div>
    )
}
