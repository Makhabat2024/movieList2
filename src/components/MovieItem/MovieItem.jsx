import React from "react";
import scss from "../MovieList/MovieList.module.scss";
import ButtonCards from "../UI/Buttons/ButtonCards";

const MovieItem = ({ link, name, date, genre, rate }) => {
  return (
    <div className={scss.movie_card}>
      <img src={link} alt={name} />
      <div className={scss.data_box}>
        <h5>Name : {name}</h5>
        <h5>Year : {date}</h5>
        <h5>Genre : {genre}</h5>
        <h5>Rating : {rate} / 5</h5>
        <div className={scss.buttons}>
          <ButtonCards>Update</ButtonCards>
          <ButtonCards>Delete</ButtonCards>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
