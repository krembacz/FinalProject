import React from 'react'
import HeroBannerHome from '../Components/HeroBanner';
import '../StyleSheets/HomePageStyle.css';
import FeaturedRecipe from '../Components/FeaturedRecipe';

export default function Homepage({ recipeList, API, featuredRecipe }) {

    return (
        <div>
            <HeroBannerHome />
            <div className="featured-container">
                <div className="featured-header  col-sm-11 col-md-8 col-lg-6">
                    CHECK OUT OUR FEATURED RECIPE
                </div>
                <FeaturedRecipe recipeList={recipeList} API={API} featuredRecipe={featuredRecipe} />
            </div>
            <br />
        </div>
    )
}
