import MovieList from "./components/MovieList";
import { FaSistrix } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import MovieInfo from "./components/MovieInfo";
export const API_KEY = "d38aa67b";

const App = () => {
  const style = { fontSize: "24px" };
  const [search, setSearch] = useState();
  const [timeOut, setTimeOut] = useState();
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();

  const fetchData = async (searchString) => {
    const res = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    setMovieList(res.data.Search);
  };

  const submitChange = (event) => {
    clearTimeout(timeOut);
    setSearch(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    setTimeOut(timeout);
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row fixed top-0 right-0 left-0 z-10 justify-between items-center bg-stone-800 text-orange-400 p-5 lg:text-4xl text-2xl font-poppins font-medium shadow-md shadow-stone-900">
          <div className="flex flex-row items-center">
            <img
              src="/icon.png"
              alt="icon"
              width="48px"
              height="48px"
              className="mr-3"
            />
            MovieLand
          </div>
          <div className="flex flex-row p-2 bg-white rounded-lg w-6/12 ml-20 items-center">
            <FaSistrix style={style} />
            <input
              type="text"
              className="w-full border-none outline-none font-poppins text-stone-700 text-xl px-2"
              placeholder="Search movie"
              value={search}
              onChange={submitChange}
            />
          </div>
        </div>
        {selectedMovie && <MovieInfo selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />}
        <div className="flex flex-row flex-wrap p-10 gap-[24px] mt-20 justify-evenly">
          {movieList?.length
            ? movieList.map((movie, index) => <MovieList key={index} movie={movie} setSelectedMovie={setSelectedMovie} />)
            : "No movie search found"}
        </div>
      </div>
    </>
  );
};

export default App;
