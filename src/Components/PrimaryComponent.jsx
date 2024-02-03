import Loader from "./Loader"
import VideoTitleComponent from "./VideoTitleComponent"
import VideoTrailerComponent from "./VideoTrailerComponent"
import {useSelector} from 'react-redux'

const PrimaryComponent = () => {

  const trendingMovies = useSelector((store) => store.movie?.trending)

  if(!trendingMovies) return(<div className="flex justify-center items-center h-screen bg-black"><Loader /></div>)

  return (
    <div className="">
        <div>
            <VideoTrailerComponent moviesID={trendingMovies[0]?.id} backdrop_path={trendingMovies[0]?.backdrop_path}/>
        </div>

        <div >
            <VideoTitleComponent {...trendingMovies[0]}/>
        </div>
    </div>
  )
}

export default PrimaryComponent