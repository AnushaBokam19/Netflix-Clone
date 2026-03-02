import { useRef } from 'react';
import MovieCard from './MovieCard';
import './MovieRow.css';

export default function MovieRow({ title, movies = [] }) {
  const rowRef = useRef(null);

  const scroll = (dir) => {
    if (!rowRef.current) return;
    const amount = dir === 'left' ? -400 : 400;
    rowRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="movie-row">
      <h2 className="movie-row-title">{title}</h2>
      <div className="movie-row-container">
        <button
          type="button"
          className="movie-row-arrow movie-row-arrow--left"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        />
        <div className="movie-row-scroll" ref={rowRef}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <button
          type="button"
          className="movie-row-arrow movie-row-arrow--right"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        />
      </div>
    </section>
  );
}
