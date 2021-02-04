import axios from "../../axios";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow, id }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    axios.get(fetchUrl).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoPlay: 1,
    },
  };

  const scrollRightHandler = () => {
    document.getElementsByClassName("row__posters")[id].scrollLeft += 700;
  };

  const scrollLeftHandler = () => {
    document.getElementsByClassName("row__posters")[id].scrollLeft -= 700;
  };

  const handelClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log(movie.name, movie.original_title);
      movieTrailer(movie.name || movie.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="row">
      <h1 className="row__title">{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              onClick={() => handelClick(movie)}
              alt={movie.name || movie.original_name}
              className={`row__poster ${isLargeRow && "largerow__poster"}`}
              key={movie.id}
              src={
                base_url +
                (isLargeRow ? movie.poster_path : movie.backdrop_path)
              }
            />
          );
        })}
        <div
          className={
            isLargeRow ? "scrool_left scrool_leftLarge" : "scrool_left"
          }
          onClick={scrollLeftHandler}
        >{`<`}</div>
        <div
          className={
            isLargeRow ? "scrool_right scrool_rightLarge" : "scrool_right"
          }
          onClick={scrollRightHandler}
        >{`>`}</div>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
