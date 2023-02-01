import PropTypes from 'prop-types';
import { List } from './ReviewsList.styled';
/*
/**|======================================
/**| Export ReviewList
/**|======================================
*/
export const ReviewList = ({ reviews: { results } }) => {
  return (
    <>
      {results.length ? (
        <List>
          {results.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </List>
      ) : (
        <p>There are no reviews 😔</p>
      )}
    </>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.object,
};
