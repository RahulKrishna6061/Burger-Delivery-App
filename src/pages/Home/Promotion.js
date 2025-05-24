import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Promotion() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              {/* <p>
                Semper lacus cursus porta primis ligula risus tempus and
                sagittis ipsum mauris lectus laoreet purus ipsum tempor enim
                ipsum porta justo integer ultrice aligula lectus aenean magna
                and pulvinar purus at pretium gravida
              </p> */}
              <ul>
                <li>
                  <p>
                    A delicious burger is like a symphony of flavors — each
                    layer carefully crafted to create an unforgettable
                    experience.
                  </p>
                </li>
                <li>
                  <p>
                    A great meal isn't just about the food; it's about the
                    company, the ambiance, and the joy of shared moments.
                  </p>
                </li>
                <li>
                  <p>
                    Simplicity often makes the best meals. A well-prepared
                    burger can be as refined as it is comforting.
                  </p>
                </li>
                <li>
                  <p>
                    Every bite of a burger tells a story — a blend of flavors
                    that brings comfort and sparks joy, uniting people one meal
                    at a time.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Promotion;
