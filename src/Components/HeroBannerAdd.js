import React from 'react'
import '../StyleSheets/HeroStyle.css';
import heroVideoFour from '../Assets/heroVideoFour.mp4';

export default function HeroBannerAdd() {
    return (
        <div className="hero-short">
            <video src={heroVideoFour} autoPlay loop muted />
            <div className="overlay-short-dark"></div>
            <div className="heroText-short">
                <div className="tagline">
                    <h4> Contribute your own creations </h4>
                    <br />
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
                            <td>Peanut-Free</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
