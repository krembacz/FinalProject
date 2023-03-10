import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import HeroBannerIndividual from '../Components/HeroBannerIndividual';
import '../StyleSheets/RecipePage.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, ListGroupItem } from 'react-bootstrap';

export default function RecipePage({ recipeList, deleteRecipe, submitEditedRecipe, setId }) {
    let { recipeId } = useParams();
    const recipe = recipeList.find(r => r.id === recipeId);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    //handleChange(preptime, e)  

    const handleChange = (inputToEdit, e) => {
        let myObject = { ...editedRecipe }
        myObject[inputToEdit] = e.target.value
        //spread out an existing recipe. Edited recipe is an object with the key value pairs that exist in recipe
        //necessary to have function be unique for each input 
        setEditedRecipe(myObject);
        console.log(editedRecipe);
    };

    const handleEditedSubmit = (myEditedRecipe) => {
        submitEditedRecipe(myEditedRecipe);
        console.log(recipeList);
        navigateRecipes();
    }

    let navigate = useNavigate();
    const navigateRecipes = () => {
        navigate("/recipes");
    };


    return (
        <div>
            <HeroBannerIndividual />
            <br /><br />
            <div className="recipe-page-container">
                <h1> {recipe.recipename} </h1>
                <img src={recipe.image} alt="image of given recipe" className="recipe-image" />
                <p> {recipe.summary} </p>
                <p> {recipe.contributor} </p>

                <ul>
                    {recipe.ingredients.map(ingredient => <li> {ingredient}</li>)}
                </ul>

                <button className="btn btn-info" onClick={() => {
                    handleShow();
                    setId(recipeId);
                    setEditedRecipe(recipe);
                }}>
                    EDIT recipe
                </button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit recipe </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <div className="class-inline mb-5">
                                <Form.Group className="col-6">
                                    <Form.Label>  Recipe Name + Restriction </Form.Label>
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
                                    {/* <InputGroup.Text>Min</InputGroup.Text> */}
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
                            <br />

                            <br />
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

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => {
                            handleEditedSubmit(editedRecipe);
                            handleClose();
                        }}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <button
                    className="btn btn-warning"
                    onClick={() => {
                        deleteRecipe(recipe.id);
                        navigateRecipes();
                    }}>
                    DELETE Recipe
                </button>

                <div className="steps">

                </div>
            </div>
        </div >
    )
}
