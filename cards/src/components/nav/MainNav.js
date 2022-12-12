import { Button, Container, Form, Navbar } from "react-bootstrap";
import './navStyles.css'

import "bootstrap/dist/css/bootstrap.min.css";

const MainNav = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" >
        <Container fluid className="justify-content-center">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"        
            />
            <Button className="search-btn" variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNav;
