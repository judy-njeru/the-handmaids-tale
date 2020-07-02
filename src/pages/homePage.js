import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
// import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="page-container page">
      <div className="banner-image"></div>
      <Container className="txt-container">
        <Row>
          <Col>
            <h1>
              <span>the</span> 
              <span className="txt-red">
                  handmaid's 
              </span>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="sp-text">
              <h1> 
                <span>tale</span>
              </h1>
              <p >The future is a fucking <br></br>nighmare!</p>
            </div> 
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
