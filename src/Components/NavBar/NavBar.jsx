import React from "react";
import { Navbar, Form, FormControl, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./NavMenu.css";

function NavBar() {
  return (
    <div>
      <Navbar bg="" variant="dark" className="navMenu ">
        <Navbar.Brand to="/">
          {" "}
          <img
            src="https://logodix.com/logo/67450.jpg"
            width="50px"
            alt=""
          />{" "}
          Rakcha.tn{" "}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            {" "}
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            {" "}
            <Link to="/movies">Movies</Link>
          </Nav.Link>
          <Nav.Link>
            {" "}
            <Link to="/search">Search</Link>
          </Nav.Link>
          <Nav.Link>
            {" "}
            <Link to="/addMovies">AddMovies</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
