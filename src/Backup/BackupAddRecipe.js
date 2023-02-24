import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import '../StyleSheets/AddRecipeFormStyle.css';

export default function AddRecipeButton({ addRecipeClick }) {

    //destructuring the item/text input fields to be updated
    const [recipeName, setRecipeName] = useState("");
    const [contributor, setContributor] = useState("");
    const [prepTime, setPrepTime] = useState();
    const [totalTime, setTotalTime] = useState();
    const [ingredients, setIngredients] = useState("");
    const [summary, setSummary] = useState("");
    const [steps, setSteps] = useState("");

    //when submitted, creates an object called new book with specified attributes 
    const handleSubmit = () => {
        const newRecipe = { recipeName, contributor, prepTime, ingredients, summary, steps };
        addRecipeClick(newRecipe);
        console.log(newRecipe);
        clearForms();
    }

    const clearForms = () => {
        setRecipeName("");
        setContributor("");
        setPrepTime("");
        setTotalTime("");
        setIngredients("");
        setSummary("");
        setSteps("");
    }

    return (
        <div className="recipe-forms">
            <Form>
                <div className="class-inline">
                    <Form.Group className="col-6" controlId="recipeNameInput">
                        <Form.Label> Restriction + Recipe Name </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="ex. GF Teriyaki Chicken"
                            required
                            value={recipeName}
                            onChange={(e) => setRecipeName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="col-5" controlId="contributorInput">
                        <Form.Label> Contributor </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Your name"
                            requiredvalue={contributor}
                            onChange={(e) => setContributor(e.target.value)}
                        />
                    </Form.Group>
                </div>


                <Form.Group className="mb-5" controlId="ingredientsInput">
                    <Form.Label> Recipe Summary </Form.Label>
                    <Form.Control
                        as="textarea"
                        cols={5}
                        rows={3}
                        placeholder="Write a brief summary of what this dish is!"
                        required
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                    />
                </Form.Group>

                <div className="class-inline-short">
                    <Form.Group className="col-4" controlId="prepTimeInput">
                        <Form.Label> Prep time </Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="how many minutes?"
                            required
                            value={prepTime}
                            onChange={(e) => setPrepTime(e.target.value)}
                        />
                    </Form.Group>


                    <Form.Group className="col-4" controlId="totalTimeInput">
                        <Form.Label> Total Recipe Time </Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="how many minutes?"
                            required
                            value={totalTime}
                            onChange={(e) => setTotalTime(e.target.value)}
                        />
                    </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="ingredientsInput">
                    <Form.Label> Ingredients </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="ex. 2 cups GF flour"
                        required
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                    />
                </Form.Group>
                <br />

                <Form.Group className="mb-3" controlId="recipeInput">
                    <Form.Label> Recipe Step-by-step </Form.Label>
                    <Form.Control
                        as="textarea"
                        cols={10}
                        rows={4}
                        placeholder="Write the steps to the recipe"
                        required
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                    />
                </Form.Group>
                <br />

                <Button
                    className="submit-btn"
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
