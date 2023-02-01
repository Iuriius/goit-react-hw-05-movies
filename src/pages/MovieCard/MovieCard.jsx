import { useEffect, useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { searchById } from '../../components/Api/Api';
import { Container } from '../../components/Layout/Layout.styled';
import {
  Image,
  Description,
  Section,
  CardWrapper,
  GoBackLink,
} from './MovieCardStyled';
import { StyledLink } from '../../components/Layout/Layout.styled';
/*
/**|======================================
/**| Export MovieCard
/**|======================================
*/
export const MovieCard = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState('');
  const location = useLocation();
  const refLocation = useRef(location.state?.from);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await searchById(movieId);
        setMovieDetails(response);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovie();
  }, [movieId]);

  if (error) {
    toast.error('Sorry, something went wrong 😞');
    return (
      <Container>
        <div>
          <Toaster />
        </div>
        <p>Something went wrong... 😞</p>
      </Container>
    );
  }

  if (!movieDetails) {
    return (
      <Container>
        <p>There are no reviews of this movie yet 😞</p>
      </Container>
    );
  }
  const { title, poster_path, release_date, vote_average, overview, genres } =
    movieDetails;

  return (
    <>
      <Section>
        <Container>
          <GoBackLink to={refLocation.current ?? '/'}>🔙 Go back</GoBackLink>
          <CardWrapper>
            <Image
              src={
                poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`
              }
              alt={title}
            />
            <Description>
              <h2>{`${title}(${new Date(release_date).getFullYear()})`}</h2>
              <p>User score: {Math.ceil(vote_average * 10)} %</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
              <p>
                {genres?.length > 0
                  ? genres.map(genre => genre.name).join(' ')
                  : '-'}
              </p>
            </Description>
          </CardWrapper>
        </Container>
      </Section>
      <Section>
        <Container>
          <StyledLink to={'cast'}>🎞 Cast</StyledLink>
          <StyledLink to={`reviews`}>🎞 Reviews</StyledLink>
        </Container>
      </Section>
      <Section>
        <Outlet />
      </Section>
    </>
  );
};
