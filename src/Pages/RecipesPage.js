import React from 'react'
import RecipeCard from '../Components/RecipeCard';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../StyleSheets/HomePageStyle.css';
import HeroBannerRecipe from '../Components/HeroBannerRecipe';

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

{/* <Row className="cards-container">
{recipeList.map(recipe => <Link to={'/recipes/' + recipe.id}> <RecipeCard recipe={recipe} key={recipe.id} /></Link>)}
</Row> */}
