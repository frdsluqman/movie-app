import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../App";

const MovieInfo = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`)
      .then((res) => setMovieInfo(res.data));
  }, [selectedMovie]);

  return (
    <div className="flex flex-row p-10 mt-20 justify-center border-b-2 border-solid border-gray-200">
      {movieInfo ? <>
      
      </> : "Loading..."}
      <img
        src={movieInfo?.Poster}
        alt="info-img"
        height="352px"
        className="object-cover rounded-lg"
      />
      <div className="flex flex-col m-5">
        <span className="font-poppins text-xl font-semibold my-2 mx-0 whitespace-nowrap text-ellipsis overflow-hidden">
          <span className="capitalize">{movieInfo?.Type}</span> :{" "}
          {movieInfo?.Title}
        </span>
        <span className="text-lg font-medium text-stone-800 overflow-hidden capitalize text-ellipsis">
          IMDB Rating :{" "}
          <span className="opacity-75">{movieInfo?.imdbRating}</span>
        </span>
        <span className="text-lg font-medium text-stone-800 overflow-hidden capitalize text-ellipsis">
          Year : <span className="opacity-75">{movieInfo?.Year}</span>
        </span>
        <span className="text-lg font-medium text-stone-800 overflow-hidden capitalize text-ellipsis">
          Language : <span className="opacity-75">{movieInfo?.Language}</span>
        </span>
        <span className="text-lg font-medium text-stone-800 overflow-hidden capitalize text-ellipsis">
          Rated : <span className="opacity-75">{movieInfo?.Rated}</span>
        </span>
        <span className="text-lg font-medium text-stone-800 overflow-hidden capitalize text-ellipsis">
          Released : <span className="opacity-75">{movieInfo?.Released}</span>
        </span>
        <span className="text-lg font-medium text-stone-800 overflow-hidden capitalize text-ellipsis">
          Runtime : <span className="opacity-75">{movieInfo?.Runtime}</span>
        </span>
        <span className="text-lg font-medium text-stone-800 overflow-hidden capitalize text-ellipsis">
          Genre : <span className="opacity-75">{movieInfo?.Genre}</span>
        </span>
        <span className="text-lg font-medium text-stone-800 overflow-hidden capitalize text-ellipsis">
          Director : <span className="opacity-75">{movieInfo?.Director}</span>
        </span>
        <span className="text-lg font-medium text-stone-800 overflow-hidden capitalize text-ellipsis">
          Actors : <span className="opacity-75">{movieInfo?.Actors}</span>
        </span>
        <span className="text-lg font-medium text-stone-800 overflow-hidden capitalize text-ellipsis">
          Plot : <span className="opacity-75">{movieInfo?.Plot}</span>
        </span>
      </div>
      <span
        className="bg-gray-200 h-fit p-2 rounded-md font-poppins text-sm font-medium cursor-pointer text-black"
        onClick={() => props.setSelectedMovie()}
      >
        X
      </span>
    </div>
  );
};

export default MovieInfo;
