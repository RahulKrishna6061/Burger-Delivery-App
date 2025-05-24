import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `We take pride in using the freshest ingredients and our original recipes to create flavorful dishes. From signature burgers to every meal, we deliver quality, tradition, and a memorable dining experience. Taste the difference with us!`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `We serve only the finest quality food, made with fresh, premium ingredients. Each dish is carefully crafted to deliver exceptional flavor, ensuring a satisfying and memorable dining experience with every bite.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Enjoy hot, fresh, and delicious fast food delivered right to your door. With quick service and quality meals, we bring your favorites straight to you—satisfaction in every bite, delivered fast!`,
  },
  // Add more mock data objects as needed
];

function About() {
  return (
    <>
      <section id="about" className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>a burger without cheese is like a hug without a squeeze</h2>
              <p>
                Juicy patties, soft buns, perfect crunch, and a flavor balance
                that hits every note—our burgers are crafted for the perfect
                bite, every time!
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
