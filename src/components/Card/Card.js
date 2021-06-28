import React from "react";
import PropTypes from "prop-types";

const Card = ({ movie }) => (
  <div className="col-md-4">
    <div className="card animated fadeInUp">
      <img
        src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
        alt={movie.original_title}
        className="card-img-top"
        width="100"
        
      />
      <div className="card-body">
        <h4>{`${movie.original_title}`}</h4>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    original_title: PropTypes.string,
    poster_path: PropTypes.string,
  }).isRequired,
};

export default Card;
 