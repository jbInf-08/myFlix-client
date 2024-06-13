import React from 'react';
import PropTypes from 'prop-types'; // Ensure PropTypes is imported

const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div onClick={() => onMovieClick(movie)}>
      {movie.title}
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // Add other required properties here
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieCard;