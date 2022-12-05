import React from "react";
import "./Services.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import { Container, Row, Col } from "reactstrap";

const Services = () => {
  return (
    <section id="service">
      <Container>
        <Row>
        <ScreenHeading
        title={"My Services"}
        subHeading={"What i serve to my client"}/>
          <Col lg='4' md='6' sm='6'>
            <div className="single__service">
              <span className="service__icon">
              {/* <i class="fa-solid fa-code"></i> */}
              </span>
              <h2>Web Design</h2>
              <p> Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  Lorem ipsum consectetur adipisicing elit. </p>
            </div>
          </Col>
          <Col lg='4' md='6' sm='6'>
            <div className="single__service">
              <span className="service__icon">
              {/* <i class="fa-solid fa-code"></i> */}
              </span>
              <h2>Web Design</h2>
              <p> Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  Lorem ipsum consectetur adipisicing elit. </p>
            </div>
          </Col>
          <Col lg='4' md='6' sm='6'>
            <div className="single__service">
              <span className="service__icon">
              {/* <i class="fa-solid fa-code"></i> */}
              </span>
              <h2>Web Design</h2>
              <p> Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  Lorem ipsum consectetur adipisicing elit. </p>
            </div>
          </Col>
          <Col lg='4' md='6' sm='6'>
            <div className="single__service">
              <span className="service__icon">
              {/* <i class="fa-solid fa-code"></i> */}
              </span>
              <h2>Web Design</h2>
              <p> Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  Lorem ipsum consectetur adipisicing elit. </p>
            </div>
          </Col>
          <Col lg='4' md='6' sm='6'>
            <div className="single__service">
              <span className="service__icon">
              {/* <i class="fa-solid fa-code"></i> */}
              </span>
              <h2>Web Design</h2>
              <p> Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  Lorem ipsum consectetur adipisicing elit. </p>
            </div>
          </Col>
          <Col lg='4' md='6' sm='6'>
            <div className="single__service">
              <span className="service__icon">
              {/* <i class="fa-solid fa-code"></i> */}
              </span>
              <h2>Web Design</h2>
              <p> Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,  Lorem ipsum consectetur adipisicing elit. </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
