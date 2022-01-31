import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleJob from "./SingleJob";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import { BsSearch } from "react-icons/bs";
import "../components/Search.css";
const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [job, setJob] = useState([]);
  const handleChange = (e) => {
    // e.preventDefault();
    setSearchQuery(e.target.value);
  };
  const fetchSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://strive-jobs-api.herokuapp.com/jobs?search=" +
        searchQuery +
        "&limit=10"
    );
    if (response.ok) {
      const res = await response.json();
      setJob(res.data);
    } else {
      alert("Error fetching jobs");
    }
  };
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand id="nav__brand">
          <span style={{ color: "red" }}>Job</span>
          <span style={{ fontSize: "x-large" }}>ify</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto nav__link "
            id="nav-tabs"
            style={{ maxHeight: "250px" }}
            navbarScroll
          >
            <Nav.Link className="d-flex pr-5">
              <Link
                to="/favourites"
                className="btn btn-light ml-auto mr-5  mt-3"
              >
                Favourite Companies
                <AiFillHeart color="red" size={26} className="" />
              </Link>
            </Nav.Link>

            <Nav.Link href="#" disabled></Nav.Link>
          </Nav>
          <Col className="mx-auto mt-2">
            <Form onSubmit={fetchSearch} className="search__box">
              <input
                className="search__txt"
                type="search"
                value={searchQuery}
                onChange={handleChange}
                placeholder="Search for jobs"
              />
              <BsSearch className="search__btn" />
            </Form>
          </Col>
        </Navbar.Collapse>
      </Navbar>
      <Row md={3} className="mx-auto mb-5">
        {job &&
          job.map((search) => <SingleJob job={search} key={search._id} />)}
      </Row>
    </Container>
  );
};

export default Search;
