import React from 'react';
import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap'
import logo from "../assets/images/hulu-original.svg";

const Header = () => {
    return (
        <header className="header">
            <Container>
                <Row>
                    <Col xs={4} md={4}>
                        <input id="burger" type="checkbox" />
                        <label htmlFor="burger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>

                        <nav>    
                            <ul>
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                    <Link to="/about">
                                        About
                                    </Link>
                                    <Link to="/cast">
                                        Cast
                                    </Link>
                                    <Link to="/seasons">
                                        Seasons
                                    </Link>
                                    <Link to="/gallery">
                                        Gallery
                                    </Link>
                                </li>
                            </ul>  
                        </nav>
                        </Col>
                        <Col xs={4} md={4}>
                            <div>
                                <img src={logo} alt="hulu logo"/>
                            </div>
                        </Col>
                        <Col xs={4} md={4} className="btn-watchlink">
                            <button className="watch-now">watch now</button>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;