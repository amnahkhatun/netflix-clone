import React, { useEffect, useState } from 'react';
import axios from '../axios';

import requests from '../apis';

import './banner.css'

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(requests.fetchNetflixOriginals)
      setMovie(req.data.results[Math.floor(Math.random() * req.data.results.length)])
      return req;
    }
    fetchData();
  }, [])
  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
        )`
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">
            Play
          </button>
          <button className="banner__button">
            My List
          </button>

        </div>
        <h1 className="banner__description">
          {movie.overview}</h1>
      </div>
      <div className="banner--fadebottom"></div>
    </header>
  )
}
