import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { List, FilmLink } from './Films.styled';
/*
/**|======================================
/**| Export Films
/**|======================================
*/
export const Films = ({ listName, movies }) => {
  const location = useLocation();

  return (
    <>
      {listName && <h2>{listName}</h2>}

      <List>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <FilmLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </FilmLink>
          </li>
        ))}
      </List>
    </>
  );
};

Films.propTypes = {
  listName: PropTypes.string,
  movies: PropTypes.array.isRequired,
};
