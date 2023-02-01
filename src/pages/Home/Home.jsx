import { useState, useEffect } from 'react';
import { popularMovies } from '../../components/Api/Api';
import { MovieList } from '../../components/MovieList/MovieList';
import { Container } from '../../components/Layout/Layout.styled';
import { Title } from './Home.styled';
/*
/**|======================================
/**| Export Home
/**|======================================
*/
export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    popularMovies().then(setMovies).catch(setError);
  }, []);

  return (
    <Container>
      <Title>Trending today:</Title>
      {movies && <MovieList movieList={movies} />}
      {error && <p>Sorry, something went wrong 😔</p>}
    </Container>
  );
};
