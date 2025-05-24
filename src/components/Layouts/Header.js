import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";

const Header = () => {
  const [nav, setNav] = useState(false);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand>
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <nav className="ms-auto d-flex align-items-center">
              <Link
                to="hero"
                smooth={true}
                uration={500}
                className="nav-link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                About
              </Link>
              <Link to="menu" smooth={true} duration={500} className="nav-link">
                Our Menu
              </Link>
              <Link to="shop" smooth={true} duration={500} className="nav-link">
                Shop
              </Link>
              <Link to="blog" smooth={true} duration={500} className="nav-link">
                Blog
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Contact
              </Link>
              <Link to="/" className="nav-link">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Link>
            </nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
