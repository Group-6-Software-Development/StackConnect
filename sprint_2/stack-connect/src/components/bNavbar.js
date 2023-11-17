// bNavbar.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Navbar.css";
import logo from "../images/logo2.svg";
import { Button, Container, Nav, Navbar, Row, Col, Form } from "react-bootstrap";

function bNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="myBlue" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="logo" alt="Stack" width="50px" height="50px" src={logo} /> StackConnect
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form inline className="mx-auto">
            <Row>
              <Col xs="auto">
                <Form.Control type="text" placeholder="Search..." className="mr-sm-2" inline={1} />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/jobs">Jobs</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default bNavbar;
