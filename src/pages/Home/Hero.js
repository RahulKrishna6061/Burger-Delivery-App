import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home" className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} className="img-fluid" alt="Hero" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h4 className="h3_lg">₹179</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">New Burger</h1>
              <h2 className="text-white">Double Barrel Classic</h2>
              <p className="text-white pt-2 pb-4">
                Twice the patties, twice the flavor! Our double-patty beef
                burger is stacked with juicy, seasoned beef, melty cheese, and
                fresh toppings, all in a soft, toasted bun. Pure indulgence in
                every bite!
              </p>
              <Link
                to="menu"
                smooth={true}
                duration={500}
                className="btn order_now"
              >
                Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
