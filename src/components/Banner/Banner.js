import { useState, useEffect } from "react";
import requests from "../../requsets";
import axios from "../../axios";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(requests.fetchNetflixOriginals).then((res) => {
      const randomIndex = Math.floor(
        Math.random() * res.data.results.length - 1
      );
      console.log(res.data.results[randomIndex]);
      setMovie(res.data.results[randomIndex]);
    });
  }, []);

  let turncut = (str, n) =>
    str && str.length > n ? str.substr(0, n - 1) + "..." : str;

  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${base_url}${movie.backdrop_path})`,
        backgroundSize: "cover",
      }}
    >
      <div className="banner__content">
        <h2 className="banner__title">
          {movie.title || movie.name || movie.original_name}
        </h2>
        <div className="banner__btns">
          <button className="banner__btn">Play</button>
          <button className="banner__btn">My List</button>
        </div>
        <p className="banner__overview">
          {movie && turncut(movie.overview, 150)}
        </p>
      </div>
      <div className="fade"></div>
    </section>
  );
};

export default Banner;
