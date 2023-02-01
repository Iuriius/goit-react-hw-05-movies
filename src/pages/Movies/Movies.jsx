import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../components/Api/Api';
import { MovieList } from '../../components/MovieList/MovieList';
import { Form, Input, Button } from './Movies.styled';
import { Container } from '../../components/Layout/LayoutStyled';
/*
/**|======================================
/**| Export Movies
/**|======================================
*/
export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: searchQuery });
  };

  useEffect(() => {
    const fetchMovie = async () => {
      if (!query) {
        return;
      }
      const response = await searchMovies(query);
      setMovieList(response);
    };
    fetchMovie();
  }, [query]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search your movie here 📽 "
          type="text"
          onChange={event => setSearchQuery(event.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>
      <MovieList movieList={movieList} />
    </Container>
  );
};
