import React from 'react'
import HeroBannerHome from '../Components/HeroBanner';
import RecipeCard from '../Components/RecipeCard';
import '../StyleSheets/HomePageStyle.css';
import { Row } from 'react-bootstrap';

export default function Homepage({ recipeList }) {

    return (
        <div className="homePageContainer">
            <HeroBannerHome />
            <div className="center">
                <Row className="cards-container">
                    {recipeList.map(recipe => <RecipeCard recipe={recipe} key={recipe.id} />)}
                </Row>
            </div>
        </div>
    )
}
