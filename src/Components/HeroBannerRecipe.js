import React from 'react'
import '../StyleSheets/HeroStyle.css';
import SearchBar from './SearchBar';
import heroVideoTwo from '../Assets/heroVideoTwo.mp4';

export default function HeroBannerRecipe() {
    return (
        <div className="hero-short">
            <video src={heroVideoTwo} autoPlay loop muted />
            <div className="overlay-short"></div>
            <div className="heroText-short">
                <div className="tagline">
                    <h4> Discover your new favorite recipe </h4>
                </div>
                <SearchBar />
                <table>
                    <tbody>
                        <tr>
                            <th> &#183; GF &#183;</th>
                            <th> &#183; DF &#183;</th>
                            <th>&#183; V &#183;</th>
                            <th>&#183; P &#183;</th>
                        </tr>
                        <tr className="center">
                            <td>Gluten-free</td>
                            <td>Dairy-free</td>
                            <td>Vegan</td>
                            <td>Peanut-free</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
