import VideoTitleComponent from "../Components/VideoTitleComponent";
import VideoTrailerComponent from "../Components/VideoTrailerComponent";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import { options } from "../utils/constant";
import RecommendedList from "../Components/RecommendedList";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

const WatchPage = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(undefined);
  const {id} = useParams()

  useEffect(() => {
    const fetchVideoDetail = async () => {
      setIsLoading(true);
      try {
        const response = await fetchData(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          options
        );
        setVideoDetails(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideoDetail();
  }, [id]);

  if(isLoading) return <div className="flex justify-center items-center h-screen"><Loader /></div>

  return (
    !isLoading && (
      <div className="bg-black text-white">
        <div>
          <div>
            <VideoTrailerComponent moviesID={videoDetails?.id} />
          </div>

          {videoDetails && (
            <div>
              <VideoTitleComponent {...videoDetails} />
            </div>
          )}
        </div>

        <div className="w-11/12 m-auto">
            <RecommendedList id={id} />
        </div>    


      </div>
    )
  );
};

export default WatchPage;
