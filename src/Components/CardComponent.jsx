import { TMDB_MOVIES_IMG_URL } from "../utils/constant"
import PropTypes from 'prop-types';
import { useState } from "react";
import { Link } from "react-router-dom";

const CardComponent = ({title, poster_path, id}) => {

  const [link] = useState(`/watch/${id}`);
  if(!poster_path) return;

  return (
    <div className="max-w-36 w-full">
      <Link to={link}><img src = {TMDB_MOVIES_IMG_URL + poster_path} alt={title} className="w-full"/></Link>
    </div>
  )
}

CardComponent.propTypes = {
    title : PropTypes.string,
    poster_path : PropTypes.string,
    id : PropTypes.number
}

export default CardComponent