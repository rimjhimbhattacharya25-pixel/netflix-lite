// const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// const BASE_URL = "https://api.themoviedb.org/3";

// export const IMAGE_BASE_URL =
//   "https://image.tmdb.org/t/p/w500";

// export const fetchPopularMovies = async () => {
//   try {
//     const response = await fetch(
//       `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
//     );

//     if (!response.ok) {
//       throw new Error(`API Error: ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("TMDB Error:", error);

//     return {
//       results: [
//         {
//           id: 1,
//           title: "Inception",
//           release_date: "2010-07-16",
//           vote_average: 8.4,
//           poster_path:
//             "/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
//         },
//         {
//           id: 2,
//           title: "Interstellar",
//           release_date: "2014-11-05",
//           vote_average: 8.5,
//           poster_path:
//             "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
//         },
//         {
//           id: 3,
//           title: "The Dark Knight",
//           release_date: "2008-07-18",
//           vote_average: 9.0,
//           poster_path:
//             "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
//         },
//         {
//           id: 4,
//           title: "Avengers: Endgame",
//           release_date: "2019-04-26",
//           vote_average: 8.2,
//           poster_path:
//             "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
//         },
//         {
//           id: 5,
//           title: "Joker",
//           release_date: "2019-10-04",
//           vote_average: 8.1,
//           poster_path:
//             "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
//         },
//         {
//           id: 6,
//           title: "Dune",
//           release_date: "2021-10-22",
//           vote_average: 7.8,
//           poster_path:
//             "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
//         },
//       ],
//     };
//   }
// };

// export const searchMovies = async (query) => {
//   const response = await fetch(
//     `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
//       query
//     )}&language=en-US&page=1`
//   );

//   if (!response.ok) {
//     throw new Error(`Search Error: ${response.status}`);
//   }

//   return await response.json();
// };

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export const IMAGE_BASE_URL =
  "https://image.tmdb.org/t/p/w500";

const fallbackMovies = [
  {
    id: 1,
    title: "Inception",
    release_date: "2010-07-16",
    vote_average: 8.4,
    poster_path: "/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    release_date: "2014-11-05",
    vote_average: 8.5,
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    release_date: "2008-07-18",
    vote_average: 9.0,
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    release_date: "2019-04-26",
    vote_average: 8.2,
    poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    id: 5,
    title: "Joker",
    release_date: "2019-10-04",
    vote_average: 8.1,
    poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
  {
    id: 6,
    title: "Dune",
    release_date: "2021-10-22",
    vote_average: 7.8,
    poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  },
];

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.warn(
      "TMDB unavailable. Using fallback movies.",
      error
    );

    return {
      results: fallbackMovies,
    };
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}&language=en-US&page=1`
    );

    if (!response.ok) {
      throw new Error(`Search Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.warn(
      "TMDB search unavailable. Using fallback search.",
      error
    );

    const filteredMovies = fallbackMovies.filter((movie) =>
      movie.title
        .toLowerCase()
        .includes(query.toLowerCase())
    );

    return {
      results: filteredMovies,
    };
  }
};