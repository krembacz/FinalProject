import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../StyleSheets/AddRecipeFormStyle.css';

export default function AddRecipeButton({ addRecipeClick }) {

    //destructuring the item/text input fields to be updated
    const [recipename, setRecipeName] = useState("");
    const [contributor, setContributor] = useState("");
    const [preptime, setPrepTime] = useState();
    const [totaltime, setTotalTime] = useState();
    const [ingredients, setIngredients] = useState([]);
    const [summary, setSummary] = useState("");
    const [steps, setSteps] = useState([]);
    const [image, setImage] = useState("");

    //when submitted, creates an object called new book with specified attributes 
    const handleSubmit = () => {
        const newRecipe = { recipename, contributor, preptime, ingredients, summary, totaltime, steps, image };
        console.log(newRecipe);
        addRecipeClick(newRecipe);
        console.log(`Your recipe has been submitted`);
        console.log(newRecipe)
        clearForms();
        navigateNewRecipe();
    }

    //clears forms after submit. Done just in case there is memory on it
    const clearForms = () => {
        setRecipeName("");
        setContributor("");
        setPrepTime("");
        setTotalTime("");
        setIngredients("");
        setSummary("");
        setSteps("");
        setImage("");
    }

    //navigates to recipes page on click
    let navigate = useNavigate();
    const navigateNewRecipe = () => {
        navigate("/recipes")
    }

    return (
        <div className="recipe-forms">
            <Form>
                <div className="class-inline mb-5">
                    <Form.Group className="col-6">
                        <Form.Label>  Recipe Name + Restriction </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="ex. Teriyaki Chicken (GF)"
                            required
                            onChange={(e) => setRecipeName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="col-5">
                        <Form.Label> Contributor </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Your name"
                            required
                            onChange={(e) => setContributor(e.target.value)}
                        />
                    </Form.Group>
                </div>

                <Form.Group className="mb-5">
                    <Form.Label> Recipe Image - horizontal images only! </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Paste in an image URL for your recipe"
                        required
                        onChange={(e) => setImage(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-5">
                    <Form.Label> Recipe Summary </Form.Label>
                    <Form.Control
                        as="textarea"
                        cols={5}
                        rows={2}
                        placeholder="Write a brief summary of what this dish is!"
                        required
                        onChange={(e) => setSummary(e.target.value)}
                    />
                </Form.Group>

                <div className="class-inline-short">
                    <Form.Group className="col-4">
                        <Form.Label>
                            PrepTime
                        </Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="in minutes"
                            required
                            onChange={(e) => setPrepTime(e.target.value)}
                        />
                        {/* <InputGroup.Text>Min</InputGroup.Text> */}
                    </Form.Group>

                    <Form.Group className="col-5 mb-3">
                        <Form.Label>
                            Total Time
                        </Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="in minutes"
                            required
                            onChange={(e) => setTotalTime(e.target.value)}
                        />
                    </Form.Group>
                </div>

                <Form.Group className="mb-3">
                    <Form.Label> Ingredients - Separate items by commas </Form.Label>
                    <Form.Control
                        as="textarea"
                        cols={10}
                        rows={2}
                        placeholder="2 cups flour, 1 egg, 1 lb chicken thigh"
                        required
                        onChange={(e) => setIngredients(e.target.value)}
                    /*                         onChange={(e) => setIngredients(e.target.value.split(","))} */
                    />
                    {console.log(ingredients)}
                </Form.Group>
                <br />

                <Form.Group className="mb-3" controlid="recipeInput">
                    <Form.Label> Recipe Steps - Separate items by commas </Form.Label>
                    <Form.Control
                        as="textarea"
                        cols={10}
                        rows={4}
                        placeholder="Treat every step like a new sentence => Crack eggs into bowl, Whisk eggs"
                        required
                        onChange={(e) => setSteps(e.target.value)}
                    />
                    {console.log(steps)}
                </Form.Group>
                <br />

                <Button
                    id="submit-btn"
                    variant="success"
                    onClick={() => {
                        handleSubmit();
                    }}>
                    Submit Recipe
                </Button>
            </Form >
        </div >
    )
}
