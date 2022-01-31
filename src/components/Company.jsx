import { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import SingleJob from "./SingleJob";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

const Company = () => {
  const [position, setPosition] = useState([]);

  const params = useParams();

  const fetchJobs = useCallback(async () => {
    const response = await fetch(
      "https://strive-jobs-api.herokuapp.com/jobs?company=" + params.company
    );
    if (response.ok) {
      const res = await response.json();
      const job = res.data;
      console.log(job);
      setPosition(job);
    } else {
      console.log("Something went wrong while fetching the data");
    }
  }, [params.company]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <Container>
      <Row md={4} xs={1}>
        {position &&
          position.map((job) => <SingleJob job={job} key={job._id} />)}
      </Row>
    </Container>
  );
};

export default Company;
