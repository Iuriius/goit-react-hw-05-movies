import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { searchCast } from '../Api/Api';
import { CastList, CastItem, Image } from '../Cast/CastStyled';
import { Container } from '../Layout/LayoutStyled';
/*
/**|======================================
/**| Export Cast
/**|======================================
*/
export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await searchCast(movieId);
        setCast(response);
      } catch (error) {
        setError(error);
      }
    };
    fetchCast();
  }, [movieId]);

  if (error) {
    toast.error(`Sorry, there's been an error!`);
    return (
      <Container>
        <p>Something went wrong 😞</p>
      </Container>
    );
  }
  return (
    <CastList>
      <div>
        <Toaster />
      </div>
      {cast.length > 0 &&
        cast.map(({ name, profile_path, character, id }) => (
          <CastItem key={id}>
            <Image
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `😞`
              }
              alt={name}
            />
            <div>
              <h2>{name}</h2>
              <p>Character: {character}</p>
            </div>
          </CastItem>
        ))}
    </CastList>
  );
};
