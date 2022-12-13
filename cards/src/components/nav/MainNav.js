import { Button, Container, Form, Navbar } from "react-bootstrap";
import React, { useState } from "react";
import { search } from "../../services/unsplashService";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "../mappedCards/Cards"

const MainNav = () => {
  const [formData, setFormData] = useState("");
  const [cards, setCards] = useState([]);


  const onSearchFromChange = (e) => {
    setFormData(e.target.value);
  
  };

  const onSearchClick = (e) => {
    console.log("useEffect is firing");
    let query = formData;
    console.log("query");
    search(query)
      .then(onSearchSuccess)
      .catch(onSearchError);
  };
  const onSearchSuccess = (response) => {
    console.log("onSearchSuccess is firing");
    let result = response.data.results;
    console.log(result);
    setCards(() => {
      return result;
    });
  };

  const mapCards = (card) => {
    return <Cards card={card} key={"Card-" + card.id}/>
  }

  const onSearchError = (response) => {
    console.error({ error: response });
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid className="justify-content-center">
          <Form className="d-flex">
            <Form.Control
              type="search"
              onChange={onSearchFromChange}
              value={formData}
              id="search-box"
              name="search-value"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              className="search-btn"
              variant="outline-success"
              onClick={onSearchClick}
            >
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
      <div className="row">{cards.map(mapCards)}</div>  
    </>
  );
};

export default MainNav;
