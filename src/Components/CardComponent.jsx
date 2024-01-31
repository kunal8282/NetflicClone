import { TMDB_MOVIES_IMG_URL } from "../utils/constant"
import PropTypes from 'prop-types';

const CardComponent = ({title, poster_path}) => {

  if(!poster_path) return;

  return (
    <div className="max-w-36 w-full">
        <img src = {TMDB_MOVIES_IMG_URL + poster_path} alt={title} className="w-full"/>
    </div>
  )
}

CardComponent.propTypes = {
    title : PropTypes.string,
    poster_path : PropTypes.string
}

export default CardComponent