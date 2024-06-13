import React, { useState, useEffect } from 'react';
import MovieCard from '../movie-card/movie-card';
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('https://my-flix-api-faa857fcfb0f.herokuapp.com/movies')
    .then((response) => response.json())
    .then(movies => {
        setMovies(movies)
    })
    .catch(e => console.log(e))
}, []); // Empty dependency array ensures fetching happens only once

if (selectedMovie) {
  return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
  );
}
if (movies.length === 0) {
  return <div>The list is empty!</div>;
}


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