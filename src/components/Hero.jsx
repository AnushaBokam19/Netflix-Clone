import { imageUrl } from '../api/tmdb';
import './Hero.css';

export default function Hero({ item }) {
  if (!item) return null;

  const title = item.title || item.name;
  const backdropUrl = imageUrl(item.backdrop_path, 'original');
  const year = item.release_date?.slice(0, 4) || item.first_air_date?.slice(0, 4) || '';
  const mediaType = item.media_type === 'tv' ? 'SERIES' : 'MOVIE';

  return (
    <section
      className="hero"
      style={backdropUrl ? { backgroundImage: `linear-gradient(to right, #141414 0%, transparent 50%, transparent 100%), url(${backdropUrl})` } : {}}
    >
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-logo-n">N</span>
          <span className="hero-badge-text">{mediaType}</span>
        </div>
        <h1 className="hero-title">{title}</h1>
        <div className="hero-meta">
          <span className="hero-match">97% Match</span>
          <span>{year}</span>
          {item.number_of_seasons && (
            <span>{item.number_of_seasons} {item.number_of_seasons === 1 ? 'Season' : 'Seasons'}</span>
          )}
        </div>
        <p className="hero-overview">{item.overview}</p>
        <div className="hero-actions">
          <button type="button" className="hero-btn hero-btn--play">
            Play
          </button>
          <button type="button" className="hero-btn hero-btn--secondary">
            My List
          </button>
        </div>
      </div>
    </section>
  );
}
