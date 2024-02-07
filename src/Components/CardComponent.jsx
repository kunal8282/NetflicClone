import { TMDB_MOVIES_IMG_URL } from "../utils/constant";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const CardComponent = ({ title, poster_path, id }) => {
  const [link] = useState(`/watch/${id}`);
  if (!poster_path) return;

  return (
    <div className="max-w-36 w-full relative ">
      <div className="absolute h-full w-full bg-slate-900 rounded">
        <div className="flex justify-center items-center h-full">
          <h1 className="text-white text-sm font-light text-center">{title}</h1>
        </div>
      </div>

      <Link to={link}>
        <img
          src={TMDB_MOVIES_IMG_URL + poster_path}
          alt={title}
          className="w-full rounded cursor-pointer transition duration-200 ease-in-out transform hover:scale-105"
        />
      </Link>
    </div>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  id: PropTypes.number,
};

export default CardComponent;
