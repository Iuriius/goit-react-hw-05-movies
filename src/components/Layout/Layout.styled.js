import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: xx-large;
  padding: 1rem;
  background: Sienna;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;
export const StyledLink = styled(NavLink)`
  color: cornsilk;
  text-decoration: none;
  text-shadow: 1px 1px 1px darkblue;
  margin: 1rem;
`;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;
