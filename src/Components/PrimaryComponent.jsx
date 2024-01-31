import VideoTitleComponent from "./VideoTitleComponent"
import VideoTrailerComponent from "./VideoTrailerComponent"
import {useSelector} from 'react-redux'

const PrimaryComponent = () => {

  const trendingMovies = useSelector((store) => store.movie?.trending)

  if(!trendingMovies) return(<div>Loading...</div>)

  return (
    <div className="">
        <div>
            <VideoTrailerComponent moviesID={trendingMovies[0]?.id}/>
        </div>

        <div >
            <VideoTitleComponent {...trendingMovies[0]}/>
        </div>
    </div>
  )
}

export default PrimaryComponent