import { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import { options } from "../utils/constant";
import { useParams } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";

const VideoPlayerComponent = () => {
  const [videoID, setvideoID] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id === undefined) return;

    const fetchVideoID = async () => {
      try {
        const results = await fetchData(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          options
        );
        results?.results &&
          results?.results.filter((element) => {
            if (element.type === "Trailer") setvideoID(element.key);
          });
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };

    fetchVideoID();
  }, [id]);

  if (id === undefined)
    return (
      <div className="text-xl h-screen flex flex-col justify-center items-center bg-black text-white">
        <p>Something went wrong</p>
        <ButtonComponent
          title="Relaod Page"
          onClick={() => window.location.reload()}
        />
      </div>
      
    );
  if (error)
    return (
      <div className="text-xl h-screen flex flex-col justify-center items-center bg-black text-white">
        <p>Something went wrong</p>
        <ButtonComponent
          title="Go Back"
          onClick={() => window.history.back()}
        />
      </div>
    );

  return (
    <div className="text-white">
      <iframe
        className="w-full h-screen  "
        src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=0&loop=0&color=white&controls=1&rel=0&disablekb=1`}
        allow=""
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default VideoPlayerComponent;
