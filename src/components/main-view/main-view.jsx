import React, { useState } from 'react';
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';

const MainView = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Inception', description: 'A mind-bending thriller', poster: 'https://m.media-amazon.com/images/I/711v-ttPJRL._AC_SL1500_.jpg', genre: 'Sci-Fi', director: 'Christopher Nolan' },
    { id: 2, title: 'Interstellar', description: 'A space epic', poster: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg', genre: 'Sci-Fi', director: 'Christopher Nolan' },
    { id: 3, title: 'The Dark Knight', description: 'A superhero masterpiece', poster: 'https://m.media-amazon.com/images/I/818hyvdVfvL._AC_SL1500_.jpg', genre: 'Action', director: 'Christopher Nolan' }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onMovieClick={() => setSelectedMovie(movie)} />
      ))}
    </div>
  );
};

export default MainView;