import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import { Layout } from './components/Layout/Layout';

import { Home } from './pages/Home/Home';
import { Movies } from './pages/Movies/Movies';
import { MovieCard } from './pages/MovieCard/MovieCard';
import { Cast } from './components/Cast/Cast';
import { Reviews } from './components/Reviews/Reviews';
import { Error } from './components/Error/Error';

/*
/**|======================================
/**| Imported Components (NOT AS DEFAULT FIX)
/**|======================================
*/
// const Home = lazy(() =>
//   import('./pages/Home/Home').then(module => ({
//     ...module,
//     default: module.Home,
//   }))
// );
// const Movies = lazy(() =>
//   import('./pages/Movies/Movies').then(module => ({
//     ...module,
//     default: module.Movies,
//   }))
// );
// const MovieCard = lazy(() =>
//   import('./pages/MovieCard/MovieCard').then(module => ({
//     ...module,
//     default: module.MovieCard,
//   }))
// );
// const Cast = lazy(() =>
//   import('./components/Cast/Cast').then(module => ({
//     ...module,
//     default: module.Cast,
//   }))
// );
// const Reviews = lazy(() =>
//   import('./components/Reviews/Reviews').then(module => ({
//     ...module,
//     default: module.Reviews,
//   }))
// );
// const Error = lazy(() =>
//   import('./components/Error/Error').then(module => ({
//     ...module,
//     default: module.Error,
//   }))
// );
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
