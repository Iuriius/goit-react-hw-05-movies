import axios from 'axios';
/*
/**|======================================
/**| Fetch Axios Library
/**|======================================
*/
const fetch = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});
const popular = 'trending/movie/week';
const movieName = 'search/movie';
/*
/**|======================================
/**| Export Fetch Results
/**|======================================
*/
export const popularMovies = async () => {
  const response = await fetch.get(`/${popular}`, {
    params: {
      api_key: '23220e7137d4edd367a9f0eb448d494f',
    },
  });
  return response.data.results;
};

export const searchMovies = async searchQuery => {
  const response = await fetch.get(`/${movieName}`, {
    params: {
      api_key: '23220e7137d4edd367a9f0eb448d494f',
      query: searchQuery,
    },
  });
  return response.data.results;
};

export const searchById = async id => {
  const response = await fetch.get(`/movie/${id}`, {
    params: {
      api_key: '23220e7137d4edd367a9f0eb448d494f',
    },
  });
  return response.data;
};

export const searchCast = async id => {
  const response = await fetch.get(`/movie/${id}/credits`, {
    params: {
      api_key: '23220e7137d4edd367a9f0eb448d494f',
    },
  });
  return response.data.cast;
};

export const searchReview = async id => {
  const response = await fetch.get(`/movie/${id}/reviews`, {
    params: {
      api_key: '23220e7137d4edd367a9f0eb448d494f',
    },
  });
  return response.data.results;
};
