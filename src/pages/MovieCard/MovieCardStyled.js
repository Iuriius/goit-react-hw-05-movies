import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  margin: 0 auto;
  text-align: center;
  margin: 50px;
`;

export const CardWrapper = styled.div`
  display: flex;
  background: Chocolates;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const Image = styled.img`
  max-width: 300px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const Description = styled.div`
  color: brown;
`;

export const GoBackLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  margin-bottom: 10px;
`;
