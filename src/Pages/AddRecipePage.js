import React from 'react'
import '../StyleSheets/NewRecipePageStyle.css';
import AddRecipeForm from '../Components/AddRecipeForm';
import HeroBannerAdd from '../Components/HeroBannerAdd';

export default function AddRecipePage({ addRecipeClick }) {

    return (
        <div>
            <HeroBannerAdd />
            <div className="add-form-container">
                <AddRecipeForm addRecipeClick={addRecipeClick} />
            </div >
        </div>
    )
}
