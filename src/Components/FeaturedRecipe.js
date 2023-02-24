import React from 'react'
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../StyleSheets/HomePageStyle.css';

export default function FeaturedRecipe({ featuredRecipe }) {

    return (
        <div>
            <Row className="card-header">
                <div className="card-text">
                    <div className="inline">
                        <h4> {featuredRecipe.recipename} </h4>
                    </div>
                    <p className="contributor"> by {featuredRecipe.contributor} </p>
                </div>
                <Link to={"/recipes/" + featuredRecipe.id} className="btn">
                    <img src={featuredRecipe.image} alt="image of given recipe" className="recipe-image" />
                </Link>
            </Row>
        </div>
    )
}
