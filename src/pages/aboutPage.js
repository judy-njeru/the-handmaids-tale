import React from "react";
import {Container, Row, Col} from 'react-bootstrap'

const aboutPage = ()=> {
  return (
    <div className="page-container page">
      <div className="page-wrapper about">
        <Container className="abt-txt">
          <Row>
            <Col xs={4} md={4} className="txt-col">
                <h1>the future is here</h1>
                <p>In a world where fertility rates have collapsed as a result of sexually transmitted diseases and environmental pollution, the totalitarian, government of Gilead establishes.</p>
                <p>Society is organized by power-hungry leaders with a new, militarized regime of fanaticism and social classes, in which women are brutally subjugated, and by law are forced to work in very limited roles.</p>
            </Col>
            <Col xs={6} md={6}>
                <div className="abt-img">
                  <div></div>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default aboutPage;