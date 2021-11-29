import React from "react";

const MovieElement = ({ movieListUpdated, RateLimit }) => {
  return (
    <div>
      {movieListUpdated
        .filter((movie) => movie.movieRating > RateLimit)
        .map((el) => (
          <div key={el.id}>
            <h1>{el.movieName}</h1>
            <img src={el.movieLink} alt="nothingtoshow" />
            <h2>{el.movieRating}</h2>
          </div>
        ))}
    </div>
  );
};
export default MovieElement;
// //movieListUpdated.filter((movie)=>{movie.movieRate>RateLimit}).map((el) => (
//         <div key={el.id}>
//           <h1>{el.movieName}</h1>
//           <img src={el.movieLink} alt="nothingtoshow" />
//           <h2>{el.movieRating}</h2>
//         </div>
//       ))
