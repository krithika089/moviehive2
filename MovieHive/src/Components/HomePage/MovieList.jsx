
import React, { useEffect, useReducer } from "react";
import "./MovieList.css";
import axios from "axios";

const MovieLists = ({ type }) => {
  // Initial state
  const initialState = {
    data: [],
    error: null,
    isLoading: false,
  };

  // Reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_START":
        return { ...state, isLoading: true, error: null };
      case "FETCH_SUCCESS":
        return { ...state, isLoading: false, data: action.payload };
      case "FETCH_ERROR":
        return { ...state, isLoading: false, error: action.payload };
      default:
        return state;
    }
  };

  // UseReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCH_START" }); // Start loading

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${type}?api_key=b1af5ed857fd2b979ce2a83ebe436766`
      )
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data.results }); // Success
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message }); // Error
      });
  }, [type]);

  const { data, error, isLoading } = state;

  return (
    <>
      <table className="movieList_table">
        <thead>
          <tr className="Table_header">
            <th></th>
            <th>Movie Name</th>
            <th>IMDB Rating</th>
            <th>Movie Release Year</th>
          </tr>
        </thead>

        <tbody className="Table_content">
          {error && (
            <tr>
              <td className="error_display">
                Data cannot be displayed at the moment due to {error}
              </td>
            </tr>
          )}
          {isLoading && (
            <tr>
              <td className="error_display">Loading...</td>
            </tr>
          )}
          {data &&
            data.map((movie) => (
              <tr key={movie.id}>
                <td>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="movie_poster"
                    alt="Movie Poster"
                  />
                </td>
                <td>
                  {movie.original_title}
                  <p className="movie_desc">
                    {movie.overview.slice(0, 150) + "..."}
                  </p>
                </td>
                <td>{movie.vote_average}</td>
                <td>{movie.release_date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default MovieLists;







