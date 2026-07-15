// import MovieCard from "./MovieCard";

// function MovieGrid({ movies }) {
//   if (!movies.length) {
//     return (
//       <div className="empty-state">
//         <h2>No movies found</h2>
//         <p>Try searching for another movie.</p>
//       </div>
//     );
//   }

//   return (
//     <section className="movie-grid">
//       {movies.map((movie) => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//     </section>
//   );
// }

// export default MovieGrid;

// import MovieCard from "./MovieCard";

// function MovieGrid({ movies }) {
//   if (!movies || movies.length === 0) {
//     return (
//       <div className="empty-state">
//         <p>No movies found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="movie-grid">
//       {movies.map((movie) => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//     </div>
//   );
// }

// export default MovieGrid;
import MovieCard from "./MovieCard";

function MovieGrid({ movies = [] }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
}

export default MovieGrid;