import { IMAGE_BASE_URL } from "../services/tmdbApi";

function MovieCard({ movie }) {
  const year = movie.release_date
    ? movie.release_date.substring(0, 4)
    : "N/A";

  const rating =
    typeof movie.vote_average === "number"
      ? movie.vote_average.toFixed(1)
      : "N/A";

  const poster = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : "https://placehold.co/500x750?text=No+Poster";

  return (
    <div className="movie-card">
      <div className="poster-container">
        <img
          src={poster}
          alt={movie.title}
          className="movie-poster"
          loading="lazy"
        />

        <div className="rating-badge">
          ⭐ {rating}
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
}

export default MovieCard;