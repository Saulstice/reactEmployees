import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import './style.css';
import { Grid, Row, Col, Container } from 'react-bootstrap';
import API from "../../utils/API";

console.log(API.searchAll("a"));

function Search() {

  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!search) {
      return;
    }

    console.log(API.searchAll(search))
  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  return (
    <Container className="search">
      <Row>
        <Form>
          <Form.Group controlId="searchE">
            <Form.Label>Search for employee</Form.Label>
            <Form.Control value={search} onChange={handleInputChange} type="search" placeholder="Enter name" />
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
}

export default Search;
