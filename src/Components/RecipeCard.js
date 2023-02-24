import React from 'react'
import { Col, Row } from 'react-bootstrap';
import '../StyleSheets/RecipeCardStyle.css';
import { Link } from 'react-router-dom';


export default function RecipeCard({ recipe }) {

    return (
        <Col className="individual col-md-11 col-lg-3">
            <Row className="card-header">
                <Link to={"/recipes/" + recipe.id} className="btn">
                    <img src={recipe.image} alt="image of given recipe" className="recipe-image" />
                </Link>

                <div className="card-text">
                    <div className="inline">
                        <h4> {recipe.recipename} </h4>
                    </div>
                    <p className="contributor"> by {recipe.contributor} </p>
                </div>

            </Row>
        </Col>
    )
}