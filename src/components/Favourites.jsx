import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { connect } from "react-redux";
import { removeFromFavoAction } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Favourites = () => {
  const dispatch = useDispatch();

  const favourite = useSelector((s) => s.favourite);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-5">Favourite Companies</h1>
          <ListGroup className="mt-5">
            {favourite.favoCompany.map((f) => (
              <ListGroupItem>
                <AiFillHeart
                  color="red"
                  size={26}
                  className=" mr-3"
                  onClick={() => dispatch(removeFromFavoAction(f))}
                />
                <span>{f}</span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
