import axios from "../../axios";
import { useEffect, useState } from "react";

import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow, id }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchUrl]);

  const scrollRightHandler = () => {
    document.getElementsByClassName("row__posters")[id].scrollLeft += 700;
  };

  const scrollLeftHandler = () => {
    document.getElementsByClassName("row__posters")[id].scrollLeft -= 700;
  };

  return (
    <div className="row">
      <h1 className="row__title">{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
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
    </div>
  );
};

export default Row;
