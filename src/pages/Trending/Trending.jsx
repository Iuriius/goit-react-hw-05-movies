import { useState, useEffect } from 'react';
import { popularMovies } from '../../components/Api/Api';
import { MoviesList } from '../../components/MovieList/MovieList';

export const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    popularMovies().then(setMovies).catch(setError);
  }, []);

  return (
    <>
      {movies && <MoviesList listName="Trending today" movies={movies} />}
      {error && <p>Sorry! Something went wrong 😞</p>}
    </>
  );
};
