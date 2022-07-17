import React from "react";

const MovieList = ({index, movie, setSelectedMovie}) => {
    return (
        <div className="flex flex-col p-5 shadow-2xl w-[200px] cursor-pointer" onClick={() => setSelectedMovie(movie.imdbID)}>
            <img className="object-cover" src={movie.Poster} alt="movie-img" height="362px" />
            <span className="font-poppins text-sm font-medium my-2 mx-0 whitespace-nowrap text-ellipsis overflow-hidden">{movie.Title}</span>
            <div className="flex flex-row justify-between font-poppins text-sm font-medium">
                <span>Year: {movie.Year}</span>
                <span className="capitalize">Type: {movie.Type}</span>
            </div>
        </div>
    )
}

export default MovieList