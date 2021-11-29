import "./App.css";
import MovieForms from "./Component]/MovieForms";
import MovieElement from "./Component]/movieElement";
import MovieListArray from "./Moviearray";
import { useState } from "react";
import Filter from "./Component]/filter";
function App() {
  const [movieListUpdated, setMovieListUpdated] = useState(MovieListArray);
  const [rate, setRate] = useState(0);

  return (
    <div className="App">
      <MovieForms
        movieListUpdated={movieListUpdated}
        setMovieListUpdated={setMovieListUpdated}
      />
      <Filter
        movieListUpdated={movieListUpdated}
        setMovieListUpdated={setMovieListUpdated}
        RateLimit={rate}
        setRate={setRate}
      ></Filter>
      <MovieElement movieListUpdated={movieListUpdated} RateLimit={rate} />
    </div>
  );
}

export default App;
