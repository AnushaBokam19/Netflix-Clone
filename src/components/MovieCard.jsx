import { imageUrl } from '../api/tmdb';
import './MovieCard.css';

export default function MovieCard({ movie, size = 'default' }) {
  const title = movie.title || movie.name;
  const posterUrl = imageUrl(movie.poster_path);

  return (
    <div className={`movie-card movie-card--${size}`}>
      <div className="movie-card-poster">
        {posterUrl ? (
          <img src={posterUrl} alt={title} loading="lazy" />
        ) : (
          <div className="movie-card-placeholder" />
        )}
      </div>
    </div>
  );
}
