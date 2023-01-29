import { popularMovies } from '../../components/Api/Api';
import { MovieList } from '../../components/MovieList/MovieList';
import { Title } from './Home.styled';
import { Container } from '../../components/Layout/LayoutStyled';
/*
/**|======================================
/**| Export Home
/**|======================================
*/
export const Home = async () => {
  const response = await popularMovies();

  return (
    <Container>
      <Title>Trending today:</Title>
      {response && <MovieList movieList={response} />}
    </Container>
  );
};