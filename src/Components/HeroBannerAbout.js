import React from 'react'
import '../StyleSheets/HeroStyle.css';
import heroVideoFive from '../Assets/heroVideoFive.mp4';

export default function HeroBannerAbout() {
    return (
        <div className="hero-short">
            <video src={heroVideoFive} autoPlay loop muted />
            <div className="overlay-short-dark"></div>
            <div className="heroText-short">
                <div className="tagline">
                    <h4> Why does this site exist? </h4>
                </div>

                <h5> Food Allergies & Me </h5>
            </div>
        </div>
    )
}