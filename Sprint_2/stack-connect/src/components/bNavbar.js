// bNavbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Navbar.css";
import logo from "../images/logo2.svg";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Row,
  Col,
  Form,
} from "react-bootstrap";

function BNavbar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Redirect to JobsPage with the search query as a parameter
    navigate(`/jobs?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="myBlue" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            className="logo"
            alt="Stack"
            width="50px"
            height="50px"
            src={logo}
          />{" "}
          StackConnect
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form inline className="mx-auto" onSubmit={handleSearchSubmit}>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search..."
                  className="mr-sm-2"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
          <Nav className="ms-auto">
            <Nav.Link href="/jobs">Jobs</Nav.Link>
            <Nav.Link href="/post-job">Post a Job</Nav.Link>
            <Nav.Link href="/sign-in">Login</Nav.Link>
            <Nav.Link href="/employer-profile">Employer Profile</Nav.Link>
            <Nav.Link href="/developer-profile">Developer Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BNavbar;
