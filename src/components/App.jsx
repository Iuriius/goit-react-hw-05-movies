import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
/*
/**|======================================
/**| Impored Components (NOT AS DEFAULT FIX)
/**|======================================
*/
const Home = lazy(() =>
  import('./Home/Home').then(module => ({
    ...module,
    default: module.Home,
  }))
);
const Movies = lazy(() =>
  import('./Movies/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }))
);
const MovieCard = lazy(() =>
  import('./MovieCard/MovieCard').then(module => ({
    ...module,
    default: module.MovieCard,
  }))
);
const Cast = lazy(() =>
  import('./Cast/Cast').then(module => ({
    ...module,
    default: module.Cast,
  }))
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);
const Error = lazy(() =>
  import('./Error/Error').then(module => ({
    ...module,
    default: module.Error,
  }))
);
/*
/**|======================================
/**| Export App
/**|======================================
*/
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies/:movieId" element={<MovieCard />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies" element={<Movies />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};
