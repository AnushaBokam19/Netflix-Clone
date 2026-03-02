import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import {
  fetchTrending,
  fetchPopularMovies,
  fetchTopRated,
  fetchNowPlaying,
} from './api/tmdb';
import './App.css';

function App() {
  const [featured, setFeatured] = useState(null);
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setError(null);
        const [trendingRes, popularRes, topRatedRes, nowPlayingRes] = await Promise.all([
          fetchTrending('week'),
          fetchPopularMovies(),
          fetchTopRated(),
          fetchNowPlaying(),
        ]);

        const trendingList = trendingRes?.results?.filter((r) => r.poster_path) || [];
        const withBackdrop = trendingRes?.results?.filter((r) => r.backdrop_path) || [];
        setFeatured(withBackdrop[0] || null);
        setTrending(trendingList);
        setPopular(popularRes?.results || []);
        setTopRated(topRatedRes?.results || []);
        setNowPlaying(nowPlayingRes?.results || []);
      } catch (e) {
        setError(e.message || 'Failed to load movies');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="app">
        <Sidebar />
        <main className="main">
          <div className="loading">Loading...</div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <Sidebar />
        <main className="main">
          <div className="error">
            <p>{error}</p>
            <p className="error-hint">Check your API key and network.</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <div className="banner">
          No obligations. Cancel online anytime. No long-term commitment.
        </div>
        <Hero item={featured} />
        <div className="content-rows">
          <MovieRow title="Popular on Netflix" movies={popular} />
          <MovieRow title="Trending Now" movies={trending} />
          <MovieRow title="Top Rated" movies={topRated} />
          <MovieRow title="Now Playing" movies={nowPlaying} />
        </div>
      </main>
    </div>
  );
}

export default App;
