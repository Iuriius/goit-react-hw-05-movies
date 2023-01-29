import React from 'react';
import { Container } from '../Layout/LayoutStyled';
import { GoBackLink } from '../../pages/MovieCard/MovieCardStyled';
import { Title } from '../../pages/Home/Home.styled';
/*
/**|======================================
/**| Export Error
/**|======================================
*/
export const Error = () => {
  return (
    <Container>
      <Title>There's nothing found for this query 😞</Title>
      <GoBackLink to={'/'}>Back to the main page</GoBackLink>
    </Container>
  );
};
