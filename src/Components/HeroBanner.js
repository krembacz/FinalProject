import React from 'react'
import heroVideo from '../Assets/heroVideo.mp4';
import '../StyleSheets/HeroStyle.css';
import SearchBar from './SearchBar';

export default function HeroBannerHome() {
    return (
        <div className="hero">
            <video src={heroVideo} autoPlay loop muted />
            <div className="overlay"></div>
            <div className="heroText">
                <div className="tagline">
                    <h4> Allergen-friendly is people-friendly</h4>
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
