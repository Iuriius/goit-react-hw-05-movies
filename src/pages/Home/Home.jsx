import { useState, useEffect } from 'react';
import { popularMovies } from '../../components/Api/Api';
import { MovieList } from '../../components/MovieList/MovieList';
import { Title } from './Home.styled';
import { Container } from '../../components/Layout/LayoutStyled';
/*
/**|======================================
/**| Export Home
/**|======================================
*/
export const Home = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    return async function response() {
      await popularMovies();
      setResponse();
    };
  }, []);

  return (
    <Container>
      <Title>Trending today:</Title>
      {response && <MovieList movieList={response} />}
    </Container>
  );
};
