import React, { useState } from "react"
// import {data} from "../Data/MoviesData"
import scss from "./NewMovieAdd.module.scss"
import Input from "../UI/Inputs/Input"
import ButtonCards from "../UI/Buttons/ButtonCards";


const NewMovieAdd=({movies,setMovies})=>{


    const [movieLink,setMovieLink]=useState("");
    const [movieName,setMovieName]=useState("");
    const [movieGenre,setMovieGenre]=useState("");
    const [movieRate,setMovieRate]=useState(0);
    const [movieDate,setMovieDate]=useState(0);

    const handleAddMovie=()=>{
      const newMovieOgj = {
        link: movieLink,
        name: movieName,
        genre: movieGenre,
        rate: movieRate,
        date: parseInt(movieDate),
        id: Math.random(),
    }

    setMovies([...movies, newMovieOgj])
    
    setMovieLink("")
    setMovieName("")
    setMovieGenre("")
    setMovieDate(0)
    setMovieRate(0)
    

    }
    return <form className={scss.form_input} onSubmit={(event)=>{
        event.preventDefault()
        handleAddMovie()
    }}>
     
     <Input type="url" placeholder="Movie link..." value={movieLink} setData={setMovieLink}/>
     <Input type="text" placeholder="Movie name..." value={movieName}  setData={setMovieName} />
     <Input type="text" placeholder="Movie genre..." value={movieGenre}  setData={setMovieGenre} />
     <Input type="number" value={movieRate}  setData={setMovieRate} />
     <Input type="number" value={movieDate}  setData={setMovieDate} />

    <ButtonCards >Add</ButtonCards>
    </form>
}
export default NewMovieAdd