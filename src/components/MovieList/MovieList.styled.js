import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: cornsilk;
  &:hover,
  &:focus {
    color: coral;
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  text-decoration: none;
`;
