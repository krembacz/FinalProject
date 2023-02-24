import React from 'react'
import RecipeCard from '../Components/RecipeCard';
import { Row } from 'react-bootstrap';
import HeroBannerRecipe from '../Components/HeroBannerRecipe';
import '../StyleSheets/HomePageStyle.css';

export default function Recipes({ recipeList }) {
    return (
        <div>
            <HeroBannerRecipe />
            <div className="homePageContainer">
                <div className="center">
                    <Row className="cards-container">
                        {recipeList.map(recipe => <RecipeCard recipe={recipe} key={recipe.id} />)}
                    </Row>
                </div>
            </div>
        </div>
    )
}
