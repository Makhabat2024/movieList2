import React from "react";
import scss from "./MovieList.module.scss";
import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({ movies }) => {
  if (!movies || !Array.isArray(movies)) {
    return null;
  }

  return (
    <div className={scss.movieList}>
      {movies.map(({ link, name, date, genre, rate, id }) => (
        <div key={id}>
          <MovieItem
            key={id}
            link={link}
            name={name}
            date={date}
            genre={genre}
            rate={rate}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
