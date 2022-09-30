import React from "react";

function MovieItem(props) {
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w342${props.movie.poster_path}`}
          alt={props.movie.title}
        />
        <span>{props.movie.title}</span>
      </a>
    </li>
  );
}

function MovieCont(props) {
  return (
    <div className="movie__cont">
      <div className="container">
        <div className="movie__list">
          <ul>
            {props.movies.map((movies, index) => (
              <MovieItem movie={movies} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MovieCont;
