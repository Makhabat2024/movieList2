import React, { useState } from "react";
import ButtonCards from "../UI/Buttons/ButtonCards";
import { data } from "../Data/MoviesData";
import MovieList from "../MovieList/MovieList";
import scss from "../Layout/Layout.module.scss"
const AllButtons = () => {
  const [state1, setState1] = useState(data);

  const getCards = (text) => {
    const result = data.filter((item) => item.genre === text);
    setState1(result);
    console.log(result);
  };

  function resultGet(e) {
    getCards(e.target.innerText);
    console.log(e.target.innerText);
  }

  function allCards() {
    setState1(data);
  }

  return (
    <div>
      <div className={scss.allButtons}>
        <ButtonCards className="button1" onClick={resultGet}>
          Horror
        </ButtonCards>
        <ButtonCards className="button1" onClick={resultGet}>
          Cartoon
        </ButtonCards>
        <ButtonCards className="button1" onClick={resultGet}>
          Korean movie
        </ButtonCards>
        <ButtonCards className="button1" onClick={resultGet}>
          Romantic
        </ButtonCards>
        <ButtonCards className="button1" onClick={allCards}>
          AllGenres
        </ButtonCards>
      </div>
      <div>
        {/* Corrected prop name from 'data' to 'movies' */}
        <MovieList movies={state1} />
      </div>
    </div>
  );
};

export default AllButtons;
