import React from 'react'
import HeroBannerHome from '../Components/HeroBanner';
import RecipeCard from '../Components/RecipeCard';
import '../StyleSheets/HomePageStyle.css';
import { Row } from 'react-bootstrap';
import FeaturedRecipe from '../Components/FeaturedRecipe';

export default function Homepage({ recipeList, API, featuredRecipe }) {

    return (
        <div>
            <HeroBannerHome />
            <div className="featured-container">
                <div className="featured-header">
                    CHECK OUT OUR FEATURED RECIPE
                </div>
                <FeaturedRecipe recipeList={recipeList} API={API} featuredRecipe={featuredRecipe} />
            </div>
        </div>
    )
}

{/* <Row className="cards-container">
{recipeList.map(recipe => <RecipeCard recipe={recipe} key={recipe.id} />)}
</Row> */}
