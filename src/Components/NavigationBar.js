import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../StyleSheets/NavStyle.css';
import logo from '../Assets/logo_1.gif';

export default function NavigationBar() {
    //using state to change navbar color on scroll. 
    const [navColor, setNavColor] = useState(false);

    //function to change navColor state when scrolled on Y-axis 80px or greater
    const changeNavColor = () => {
        if (window.scrollY >= 80) {
            setNavColor(true);
        } else {
            setNavColor(false);
        }
    }
    //event listener for window to watch scrolling and apply data to changeNavColor function
    window.addEventListener("scroll", changeNavColor);


    return (
        <div>
            <Navbar expand="lg" variant="dark" className={navColor ? "nav-scrolled fixed-top" : "nav fixed-top"} >
                <Container className="links">
                    <Navbar.Brand as={NavLink} to="/"> <img src={logo} alt="fictional logo saying bountiful" className="logo" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/about" className="navText">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/recipes" className="navText">Recipes</Nav.Link>
                            <Nav.Link as={NavLink} to="/new" className="navText">Add a Recipe</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
