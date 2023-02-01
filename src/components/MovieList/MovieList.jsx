import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { List, Item, StyledLink } from './MovieList.styled';
/*
/**|======================================
/**| Export MovieList
/**|======================================
*/
export const MovieList = ({ movieList }) => {
  const location = useLocation();

  return (
    <List>
      {movieList.length > 0
        ? movieList.map(({ id, title }) => (
            <Item key={id}>
              <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </StyledLink>
            </Item>
          ))
        : null}
    </List>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};
