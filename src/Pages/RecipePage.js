import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Row } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import HeroBannerIndividual from '../Components/HeroBannerIndividual';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../StyleSheets/RecipePage.css';

export default function RecipePage({ recipeList, deleteRecipe, submitEditedRecipe, setId }) {
    //using recipeId as a paraameter to assign correct recipe info to cards
    let { recipeId } = useParams();
    const recipe = recipeList.find(r => r.id === recipeId);

    //modal show and handleshow 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //state for the edited recipe - this is an empty object that take input 
    const [editedRecipe, setEditedRecipe] = useState({
        recipename: "",
        contributor: "",
        preptime: "",
        totaltime: "",
        ingredients: [],
        summary: "",
        steps: [],
        image: ""
    })

    //takes two parameters, inputToEdit and event. Used spread operator for myobject 
    //spread out an existing recipe. Edited recipe is an object with the key value pairs that exist in recipe
    //necessary to have function be unique for each input 
    const handleChange = (inputToEdit, e) => {
        let myObject = { ...editedRecipe }
        myObject[inputToEdit] = e.target.value
        setEditedRecipe(myObject);
        console.log(editedRecipe);
    };

    //takes input from edit forms and uses function in App to PUT changes
    const handleEditedSubmit = (myEditedRecipe) => {
        submitEditedRecipe(myEditedRecipe);
        console.log(recipeList);
        navigateRecipes();
    }

    //navigates to recipes page on click 
    let navigate = useNavigate();
    const navigateRecipes = () => {
        navigate("/recipes");
    };


    return (
        <div>
            <HeroBannerIndividual />
            <br /><br />
            <div className="recipe-page-container">
                <div className="header-info">
                    <h1> {recipe.recipename} </h1>

                    <div className="contributor flex"> Recipe by: {recipe.contributor}
                        <div className="icons">
                            <FaEdit className="icon" size={20} onClick={() => {
                                handleShow();
                                setId(recipeId);
                                setEditedRecipe(recipe);
                            }} />

                            <FaTrash className="icon" size={18} onClick={() => {
                                deleteRecipe(recipe.id);
                                navigateRecipes();
                            }} />
                        </div>
                    </div>
                </div>

                <Row>
                    <div className="img-container col-sm-12 col-md-11 col-lg-7">
                        <img src={recipe.image} alt="image of given recipe" className="recipe-image" />
                    </div>

                    <div className=" stack summary col-sm-12 col-md-12 col-lg-5"> {recipe.summary}
                        <h3>Ingredients</h3>
                        <ul className="ingredients">
                            {recipe.ingredients.map((ingredient, index) => <li key={index}> {ingredient}</li>)}
                        </ul>
                    </div>
                </Row>

                <Row>
                    <div className="steps-container">
                        <h3>Steps</h3>
                        <ul >
                            {recipe.steps.map((step, index) => <li className="steps" key={index}>{step}</li>)}
                        </ul>
                    </div>
                </Row>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit recipe </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <div className="class-inline mb-5">
                                <Form.Group className="col-6">
                                    <Form.Label>  Recipe + Restriction </Form.Label>
                                    <Form.Control
                                        name="recipename"
                                        type="text"
                                        placeholder={recipe.recipename}
                                        required
                                        defaultValue={recipe.recipename}
                                        onChange={(e) => handleChange("recipename", e)}
                                    />
                                </Form.Group>

                                <Form.Group className="col-5">
                                    <Form.Label> Contributor </Form.Label>
                                    <Form.Control
                                        name="contributor"
                                        type="text"
                                        placeholder={recipe.contributor}
                                        required
                                        defaultValue={recipe.contributor}
                                        onChange={(e) => handleChange("contributor", e)}
                                    />
                                </Form.Group>
                            </div>

                            <Form.Group className="mb-5">
                                <Form.Label> Recipe Image - horizontal images only! </Form.Label>
                                <Form.Control
                                    name="image"
                                    type="text"
                                    placeholder="Paste in an image URL for your recipe"
                                    required
                                    defaultValue={recipe.image}
                                    onChange={(e) => handleChange("image", e)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-5">
                                <Form.Label> Recipe Summary </Form.Label>
                                <Form.Control
                                    name="summary"
                                    as="textarea"
                                    cols={5}
                                    rows={2}
                                    placeholder={recipe.summary}
                                    required
                                    defaultValue={recipe.summary}
                                    onChange={(e) => handleChange("summary", e)}
                                />
                            </Form.Group>

                            <div className="class-inline-short">
                                <Form.Group className="col-4">
                                    <Form.Label>
                                        Prep &#x2022; minutes
                                    </Form.Label>
                                    <Form.Control
                                        name="preptime"
                                        type="number"
                                        placeholder={recipe.preptime}
                                        required
                                        defaultValue={recipe.preptime}
                                        onChange={(e) => handleChange("preptime", e)}
                                    />
                                </Form.Group>

                                <Form.Group className="col-5 mb-3">
                                    <Form.Label>
                                        Total Time &#x2022; minutes
                                    </Form.Label>
                                    <Form.Control
                                        name="totaltime"
                                        type="number"
                                        placeholder={recipe.totaltime}
                                        required
                                        defaultValue={recipe.totaltime}
                                        onChange={(e) => handleChange("totaltime", e)}
                                    />
                                </Form.Group>
                            </div>

                            <Form.Group className="mb-3">
                                <Form.Label> Ingredients &#x2022; Separate items by commas </Form.Label>
                                <Form.Control
                                    name="ingredients"
                                    as="textarea"
                                    cols={10}
                                    rows={2}
                                    placeholder={recipe.ingredients}
                                    required
                                    onChange={(e) => handleChange("ingredients", e)}
                                    defaultValue={recipe.ingredients}
                                />
                            </Form.Group>
                            <br /><br />


                            <Form.Group className="mb-3" controlid="recipeInput">
                                <Form.Label> Recipe Steps &#x2022; Separate items by commas </Form.Label>
                                <Form.Control
                                    name="steps"
                                    as="textarea"
                                    cols={10}
                                    rows={4}
                                    placeholder={recipe.steps}
                                    required
                                    defaultValue={recipe.steps}
                                    onChange={(e) => handleChange("steps", e)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer id="footer">
                        <Button variant="secondary" id="close-btn" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" id="submit-btn" onClick={() => {
                            handleEditedSubmit(editedRecipe);
                            handleClose();
                        }}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div className="steps">

                </div>
            </div>
        </div >
    )
}
