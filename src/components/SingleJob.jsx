import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  addToFavoAction,
  ADD_TO_FAV,
  removeFromFavoAction,
} from "../redux/actions";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
/* 
const mapStateToProps = (s) => s;

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (comp) => dispatch(addToFavoAction(comp)),
  removeFromFavorites: (comp) => dispatch(removeFromFavoAction(comp)),
}); */
const SingleJob = ({ job }) => {
  const favourite = useSelector((s) => s.favourite);
  const dispatch = useDispatch();

  const isFav = favourite.favoCompany.includes(job.company_name);
  const toggleFavourite = () => {
    isFav
      ? dispatch(removeFromFavoAction(job.company_name))
      : dispatch(addToFavoAction(job.company_name));
  };
  return (
    <Card className="card mt-3 ml-3 mr-3 mb-3">
      <Card.Body>
        <Card.Link className="job__title mt-2" href={job.url}>
          {job.title}
          <span>
            <small>({job.job_type})</small>
          </span>
        </Card.Link>
        <Card.Text></Card.Text>
        <Link to={`/${job.company_name}`}>
          <Card.Subtitle className="mt-2 text-muted">
            {job.company_name}
          </Card.Subtitle>
        </Link>
        <Card.Text>{job.candidate_required_location}</Card.Text>

        <Card.Text className="active">
          <img src="active.png" />
          <small className="ml-1">Actively recruiting</small>
          {isFav ? (
            <AiFillHeart
              color="red"
              size={26}
              className="ml-5"
              onClick={toggleFavourite}
            />
          ) : (
            <AiOutlineHeart
              color="red"
              size={26}
              className="ml-5"
              onClick={toggleFavourite}
            />
          )}
        </Card.Text>

        <Card.Text>{job.publication_date}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default SingleJob;
