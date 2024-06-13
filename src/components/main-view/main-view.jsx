import React, { useState, useEffect } from 'react';
import MovieCard from '../movie-card/movie-card';

const MainView = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://my-flix-api-faa857fcfb0f.herokuapp.com/movies') // Updated with correct endpoint
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []); // Empty dependency array ensures fetching happens only once

  const handleMovieClick = (movie) => {
    console.log('Clicked movie:', movie);
    // Handle click logic here, e.g., set selected movie state
  };

  return (
    <div>
      <h1>Popular Movies</h1>
      {movies.map(movie => (
        <MovieCard key={movie._id} movie={movie} onMovieClick={handleMovieClick} />
      ))}
    </div>
  );
};

export default MainView;