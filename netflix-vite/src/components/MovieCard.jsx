// import { Heart, Star } from "lucide-react";
// import { IMAGE_BASE_URL } from "../services/tmdbApi";

// function MovieCard({ movie }) {
//   const releaseYear = movie.release_date
//     ? movie.release_date.split("-")[0]
//     : "N/A";

//   const rating = movie.vote_average
//     ? movie.vote_average.toFixed(1)
//     : "N/A";

//   return (
//     <article className="movie-card">
//       <div className="poster-container">
//         <img
//           src={
//             movie.poster_path
//               ? `${IMAGE_BASE_URL}${movie.poster_path}`
//               : "https://placehold.co/500x750?text=No+Poster"
//           }
//           alt={movie.title}
//           className="movie-poster"
//           loading="lazy"
//         />

//         <div className="poster-overlay" />

//         <button
//           className="favorite-button"
//           aria-label={`Add ${movie.title} to favorites`}
//         >
//           <Heart size={20} />
//         </button>

//         <div className="rating-badge">
//           <Star size={15} fill="currentColor" />
//           <span>{rating}</span>
//         </div>
//       </div>

//       <div className="movie-information">
//         <h2 className="movie-title">{movie.title}</h2>

//         <div className="movie-meta">
//           <span>{releaseYear}</span>
//           <span className="meta-dot" />
//           <span>Movie</span>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default MovieCard;

// import { Star } from "lucide-react";
// import { IMAGE_BASE_URL } from "../services/tmdbApi";

// function MovieCard({ movie }) {
//   const releaseYear = movie.release_date
//     ? movie.release_date.split("-")[0]
//     : "N/A";

//   const posterURL = movie.poster_path
//     ? `${IMAGE_BASE_URL}${movie.poster_path}`
//     : "https://placehold.co/500x750?text=No+Poster";

//   return (
//     <article className="movie-card">
//       <div className="poster-container">
//         <img
//           src={posterURL}
//           alt={movie.title}
//           className="movie-poster"
//           loading="lazy"
//         />

//         <div className="rating-badge">
//           <Star size={15} fill="currentColor" />
//           <span>{movie.vote_average?.toFixed(1) || "N/A"}</span>
//         </div>
//       </div>

//       <div className="movie-info">
//         <h3>{movie.title}</h3>
//         <p>{releaseYear}</p>
//       </div>
//     </article>
//   );
// }

// export default MovieCard;

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