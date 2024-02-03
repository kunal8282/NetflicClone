import { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import { options } from "../utils/constant";
import PropTypes from 'prop-types';

const VideoTrailerComponent = ({moviesID}) => {
  const [videoID, setvideoID] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {

    if(moviesID === undefined) return;

    const fetchVideoID = async () => {
        try {
          const results = await fetchData(`https://api.themoviedb.org/3/movie/${moviesID}/videos?language=en-US`,options)
          results?.results && results?.results.filter((element) => {
            if (element.type === "Trailer"){
              setvideoID(element.key)
            }
          });
        }
        catch(error) {
          setError(error)
          console.log(error)
        }
    }

    fetchVideoID()

  }, [moviesID]);
  
  if(moviesID === undefined) return <div>Something went wrong</div>
  if(error) return <div>Something went wrong</div>

  return (
    <div className="text-white">
    <iframe
      className="w-full aspect-video"
      src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1&loop=1&color=white&controls=0&rel=0&disablekb=1`}
      allow=""
      frameBorder='0'
    ></iframe>

  </div>
);
}

VideoTrailerComponent.propTypes = {
  moviesID : PropTypes.number

}

export default VideoTrailerComponent