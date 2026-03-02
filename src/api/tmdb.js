const API_BASE = 'https://api.themoviedb.org/3';
const IMAGE_BASE = 'https://image.tmdb.org/t/p';

const getApiUrl = (path, params = {}) => {
  const key = import.meta.env.VITE_TMDB_API_KEY;
  const search = new URLSearchParams({ api_key: key, language: 'en-US', ...params });
  return `${API_BASE}${path}?${search}`;
};

export const imageUrl = (path, size = 'w500') => {
  if (!path) return null;
  return `${IMAGE_BASE}/${size}${path}`;
};

export const fetchTrending = async (timeWindow = 'week') => {
  const res = await fetch(getApiUrl(`/trending/all/${timeWindow}`));
  if (!res.ok) throw new Error('Trending fetch failed');
  return res.json();
};

export const fetchPopularMovies = async (page = 1) => {
  const res = await fetch(
    getApiUrl('/movie/popular', { page })
  );
  if (!res.ok) throw new Error('Popular movies fetch failed');
  return res.json();
};

export const fetchDiscoverMovies = async (params = {}) => {
  const res = await fetch(
    getApiUrl('/discover/movie', {
      sort_by: 'popularity.desc',
      include_adult: false,
      page: 1,
      ...params,
    })
  );
  if (!res.ok) throw new Error('Discover movies fetch failed');
  return res.json();
};

export const fetchGenreList = async () => {
  const res = await fetch(getApiUrl('/genre/movie/list'));
  if (!res.ok) throw new Error('Genres fetch failed');
  return res.json();
};

export const fetchTopRated = async (page = 1) => {
  const res = await fetch(getApiUrl('/movie/top_rated', { page }));
  if (!res.ok) throw new Error('Top rated fetch failed');
  return res.json();
};

export const fetchNowPlaying = async (page = 1) => {
  const res = await fetch(getApiUrl('/movie/now_playing', { page }));
  if (!res.ok) throw new Error('Now playing fetch failed');
  return res.json();
};
