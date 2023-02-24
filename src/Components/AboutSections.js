import React from 'react'
import { Row, Col } from 'react-bootstrap';
import '../StyleSheets/AboutPageStyle.css';
import Toast from '../Assets/about.jpg';

export default function AboutSections() {
    return (
        <div>
            <Row className="what">
                <Col className="allergies  col-xs-12 col-md-12 col-lg-6">
                    <div className="allergy-header">What are food allergies?</div>
                </Col>

                <Col className=" col-xs-12 col-md-12 col-lg-6">
                    <p>
                        An immune system reaction soon after eating a trigger food.
                        Even a tiny amount of of the allergen can cause signs and
                        symptoms such as digestive problems, hive, swollen airways,
                        or overall inflammation.
                    </p>
                </Col>
            </Row>

            <Row className="why">
                <Col className="col-12">
                    <div className="why-header"> Why I created this site </div>
                </Col>

                <Col className="col-xs-12 col-md-12 col-lg-6 why-text">
                    <div className="text">
                        <p>
                            I was born able to eat about anything. It wasn't until around my twenties that I
                            slowly realized: some foods were making me sick, and not in the normal sense.
                            Since being on a restricted diet and discovering food allergies, I find myself and a
                            few of my friends like me having difficulties finding foods, recipes, and places to eat.
                        </p>
                        <br />
                        <p>
                            With my love for cooking, I created this website to help save the extra
                            time it takes to comb through regular, non-allergy friendly recipes and share
                            accessible and safe with my friends and family.
                        </p>
                    </div>
                </Col>

                <Col className="col-sm-12 col-md-12 col-lg-6 img-container">
                    <img src={Toast} alt="Image of multiple toasts with different ingredients on top" id="why-img" />
                </Col>
            </Row>
        </div >
    )
}
