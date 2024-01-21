import React, { useState } from "react";
import scss from "../../Layout/Layout.module.scss";
import { data } from "../../Data/MoviesData";
import NewMovieAdd from "../../NewMovieAdd/NewMovieAdd";
import MovieList from "../../MovieList/MovieList";
import AllButtons from "../../allButtons/AllButtons";

const HomeSection = () => {
  const [movies, setMovies] = useState(data);

  return (
    <div className={scss.homeSection}>
      <NewMovieAdd movies={movies} setMovies={setMovies} />
      
        <AllButtons />
      
      <MovieList movies={movies} />
    </div>
  );
};

export default HomeSection;
