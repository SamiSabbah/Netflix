import { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../requests";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      let randomMovie = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomMovie]);
    }
    fetchData();
  }, []);

  let truncate = (str, n) =>
    str && str.length > n ? str.substr(0, n - 1) + "..." : str;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie.poster_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description">
          {movie && truncate(movie.overview, 150)}
        </p>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
