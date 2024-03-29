import Header from "../Components/Header";
import useDataDispatchtoStore from "../hooks/useDataDispatchtoStore";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTrendingMovies,
  addUpcomingMovies,
  addtopRatedMovies,
} from "../utils/redux-slice/movieSlice";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";


const Body = () => {

  useDataDispatchtoStore(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    addNowPlayingMovies
  );
  useDataDispatchtoStore(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    addPopularMovies
  );
  useDataDispatchtoStore(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    addtopRatedMovies
  );
  useDataDispatchtoStore(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    addUpcomingMovies
  );
  useDataDispatchtoStore(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    addTrendingMovies
  );

  const [scrollChange, setScrollChange] = useState(false);

  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setScrollChange(true);
      } else {
        setScrollChange(false);
      }
    });

    return () => window.removeEventListener("scroll", scrollEvent);
  }, [scrollChange]);

  return (
    <div className="relative bg-black ">
      <div
        className={`fixed w-full text-white z-30 ${
          scrollChange && "bg-black"
        } transition-shadow`}
      >
        <Header />
      </div>

      <Outlet />
    </div>
  );
};

export default Body;
