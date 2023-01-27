import { popularMovies } from '../Api/Api';
import { MovieList } from '../MovieList/MovieList';
import { Title } from '../Home/Home.styled';
import { Container } from '../Layout/LayoutStyled';
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
