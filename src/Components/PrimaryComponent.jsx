import Loader from "./Loader"
import VideoTitleComponent from "./VideoTitleComponent"
import VideoTrailerComponent from "./VideoTrailerComponent"
import {useSelector} from 'react-redux'

const PrimaryComponent = () => {

  const nowPlaying = useSelector((store) => store.movie?.nowPlaying)

  if(!nowPlaying) return(<div className="flex justify-center items-center h-screen bg-black"><Loader /></div>)

  return (
    <div className="">
        <div>
            <VideoTrailerComponent moviesID={nowPlaying[0]?.id} backdrop_path={nowPlaying[0]?.backdrop_path}/>
        </div>

        <div >
            <VideoTitleComponent {...nowPlaying[0]}/>
        </div>
    </div>
  )
}

export default PrimaryComponent