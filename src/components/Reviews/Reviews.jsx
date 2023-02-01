import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { searchReview } from '../Api/Api';
import { Container } from '../Layout/Layout.styled';
import { List } from '../MovieList/MovieList.styled';
/*
/**|======================================
/**| Export Reviews
/**|======================================
*/
export const Reviews = () => {
  const [review, setReview] = useState([]);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await searchReview(movieId);
        setReview(response);
      } catch (error) {
        setError(error);
      }
    };
    fetchReview();
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

  return (
    <Container>
      {review.length !== 0 ? (
        <List>
          {review.map(({ author, content, id }) => (
            <li key={id}>
              <h2>{author && author}</h2>
              <p>{content && content}</p>
            </li>
          ))}
        </List>
      ) : (
        <p>There are no reviews of this movie yet 😞</p>
      )}
    </Container>
  );
};
