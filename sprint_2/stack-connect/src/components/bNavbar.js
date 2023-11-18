import "bootstrap/dist/css/bootstrap.min.css"; // import bs css
import "./styles/Navbar.css";
import logo from "../images/logo2.svg"; // import logo

import {
  Button,
  Container,
  Nav,
  Navbar,
  Row,
  Col,
  Form,
} from "react-bootstrap";

function bNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="myBlue" variant="dark">
      <Container>
        <Navbar.Brand href="/">
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
          <Form inline className="mx-auto">
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search..."
                  className="mr-sm-2"
                  inline={1}
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
          <Nav className="ms-auto">
            <Nav.Link href="jobs">Jobs</Nav.Link>
            <Nav.Link href="sign-in">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default bNavbar;
