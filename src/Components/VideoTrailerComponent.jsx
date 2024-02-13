import { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import { TMDB_MOVIES_ORIGINAL_IMG_URL, options } from "../utils/constant";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const VideoTrailerComponent = ({ moviesID, backdrop_path }) => {
  const [videoID, setvideoID] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (moviesID === undefined) return;

    const fetchVideoID = async () => {
      try {
        const results = await fetchData(
          `https://api.themoviedb.org/3/movie/${moviesID}/videos?language=en-US`,
          options
        );
        results?.results &&
          results?.results.filter((element) => {
            if (element.type === "Trailer") {
              setvideoID(element.key);
            }
          });
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoad(true);
      }
    };

    fetchVideoID();
  }, [moviesID]);


  if(isLoad === false) return <div className="h-screen flex justify-center items-center"> <Loader /></div>;
  if(!backdrop_path || error) return <div className="h-screen"></div>
  if (moviesID === undefined )
    return (
      <div className="h-screen">
        <img src={TMDB_MOVIES_ORIGINAL_IMG_URL + backdrop_path} alt="" className="h-full w-full"/>
      </div>
    );
  

  return (
    <div className="text-white">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1&loop=1&color=white&controls=0&rel=0&disablekb=1`}
        allow=""
        frameBorder="0"
      ></iframe>
    </div>
  );
};

VideoTrailerComponent.propTypes = {
  moviesID: PropTypes.number,
  backdrop_path: PropTypes.string,
};

export default VideoTrailerComponent;
