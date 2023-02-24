import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import RecipeCard from '../Components/RecipeCard';
import HeroBannerRecipe from '../Components/HeroBannerRecipe'
import '../StyleSheets/HomePageStyle.css';

export default function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

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
                        {searchedRecipes.map(recipe => <Link to={'/recipes/' + recipe.id}><RecipeCard recipe={recipe} key={recipe.id} /></Link>)}
                    </Row>
                </div>
            </div>
        </div>
    )
}