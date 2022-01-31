import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleJob from "./SingleJob";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

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
      <Row>
        <Col className="mx-auto mt-2">
          <Form onSubmit={fetchSearch}>
            <Form.Control
              style={{ width: "80%" }}
              type="search"
              value={searchQuery}
              onChange={handleChange}
              placeholder="Search for jobs"
            />
          </Form>
        </Col>
        <div className="d-flex pr-5">
          <Link to="/favourites" className="btn btn-light ml-auto mr-5  mt-3">
            Favourite Companies{" "}
            <AiFillHeart color="red" size={26} className="" />
          </Link>
        </div>
      </Row>
      <Row md={3} className="mx-auto mb-5">
        {job &&
          job.map((search) => <SingleJob job={search} key={search._id} />)}
      </Row>
    </Container>
  );
};

export default Search;
