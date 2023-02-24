import React from 'react'
import '../StyleSheets/HeroStyle.css';
import heroVideoThree from '../Assets/heroVideoThree.mp4';

export default function HeroBannerIndividual() {
    return (
        <div className="hero-short">
            <video src={heroVideoThree} autoPlay loop muted />
            <div className="overlay-short-xtra-dark"></div>
            <div className="heroText-short">
                <div className="tagline">
                    <h4> Allergy-friendly just for you </h4>
                </div>

                <h5>Available Allergen labels </h5>
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