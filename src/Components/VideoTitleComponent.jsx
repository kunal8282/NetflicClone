import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../utils/redux-slice/wishlistSlice";
import { remove } from "../utils/redux-slice/wishlistSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

const VideoTitleComponent = ({
  title,
  overview,
  release_date,
  runtime,
  vote_average,
  genres,
  id,
  poster_path,
}) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const [isInWishList, setIsInWishList] = useState(
    wishlist.filter((item) => item.id === id).length > 0 ? true : false
  );

  const wishlistClickHandler = () => {
    setIsInWishList(true);
    dispatch(add({ id, poster_path }));
  };

  const removeFromWishListHandler = () => {
    setIsInWishList(false)
    dispatch(remove({ id }));
  }
  
  return (
    <div>
      <div className="flex flex-col justify-center px-16 absolute bg-gradient-to-r from-black w-full aspect-video top-0 text-white">
        <div className="">
          <h1 className="text-5xl font-semibold">{title}</h1>
          {release_date && runtime && (
            <p className="flex gap-4 pt-3 font-semibold text-sm">
              <li className="list-none">{release_date.slice(0, 4)}</li>
              <li>{runtime} mins</li>
              <li className="">
                <span className="bg-green-700 px-1 py-1 rounded">
                  <FontAwesomeIcon
                    icon={icon({
                      name: "star",
                      family: "classic",
                      style: "regular",
                    })}
                    className="px-1"
                  />
                  {vote_average}
                </span>
              </li>
            </p>
          )}
          <p className="w-80 py-5">
            {overview.length >= 150 ? overview.slice(0, 150) + "..." : overview}
          </p>

          {genres && (
            <div className="flex gap-3 flex-wrap w-80 p">
              {genres.map((element, index) => (
                <span
                  key={element.id}
                  className={
                    index !== genres.length - 1 ? "border-r-2 pr-3" : ""
                  }
                >
                  {element.name}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="py-3 flex gap-2">
          <Link to={"/video/" + id} className="w-1/4">
            <button className="flex justify-center items-center w-full px-6 py-2 bg-white text-black rounded mr-2 outline-none font-semibold">
              <FontAwesomeIcon
                icon={icon({ name: "play", family: "classic", style: "solid" })}
                className="px-2 text-sm"
              />
              Watch Now
            </button>
          </Link>

          {!isInWishList ? (
            <button
              className="bg-white px-4 rounded bg-opacity-15"
              onClick={wishlistClickHandler}
            >
              <FontAwesomeIcon
                icon={icon({ name: "plus", family: "classic", style: "solid" })}
              />
            </button>
          ) : (
            <button
              className="bg-white px-4 rounded bg-opacity-15"
              onClick={removeFromWishListHandler}
            >
              <FontAwesomeIcon
                icon={icon({
                  name: "check",
                  family: "classic",
                  style: "solid",
                })}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

VideoTitleComponent.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  runtime: PropTypes.number,
  vote_average: PropTypes.number,
  genres: PropTypes.array,
  id: PropTypes.number,
  poster_path: PropTypes.string,
};

export default VideoTitleComponent;
