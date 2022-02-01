import React, { useState, useEffect } from 'react';

import axios from '../axios';

import './row.css'

const baseUrl = "https://image.tmdb.org/t/p/original/"

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl)
      setMovies(req["data"]["results"])
      return req
    }
    fetchData()
  }
    , [fetchUrl])
  return <div className="row">
    {title}
    <div className="row__posters">
      {movies.map((movie) => (
        <img key={movie.id}
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
          alt={movie.name}></img>
      ))}
    </div>
  </div>;
}



export default Row;
