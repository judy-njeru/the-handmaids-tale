import React from 'react';
import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    return(   
        <footer className="footer">
            <Container>
                <Row>
                    <Col>
                        <div className="test">
                            <div className="test1">01</div>
                            <div className="test2"></div>
                            <div className="test3">05</div>

                        </div>
                        <div className="navigate">
                        <Link to="/about">
                            <button className="btn">Translate to Next Page</button>
                        </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;