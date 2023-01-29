import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import { Layout } from './components/Layout/Layout';
/*
/**|======================================
/**| Imported Components (NOT AS DEFAULT FIX)
/**|======================================
*/
const Home = () =>
  import('./pages/Home/Home').then(module => ({
    ...module,
    default: module.Home,
  }));
const Movies = () =>
  import('./pages/Movies/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }));
const MovieCard = () =>
  import('./pages/MovieCard/MovieCard').then(module => ({
    ...module,
    default: module.MovieCard,
  }));
const Cast = () =>
  import('./components/Cast/Cast').then(module => ({
    ...module,
    default: module.Cast,
  }));
const Reviews = () =>
  import('./components/Reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }));
const Error = () =>
  import('./components/Error/Error').then(module => ({
    ...module,
    default: module.Error,
  }));
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
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieCard />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};
