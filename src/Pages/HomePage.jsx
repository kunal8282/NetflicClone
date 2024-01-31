import PrimaryComponent from "../Components/PrimaryComponent"
import SecondaryComponent from "../Components/SecondaryComponent"
import { useSelector } from "react-redux"

const HomePage = () => {

  const {nowPlaying, popular, trending, topRated, upcoming} = useSelector((store) => store?.movie)

  return (
    <div>
        <PrimaryComponent />

        <div className="bg-black text-white">
          <SecondaryComponent data = {{nowPlaying, popular, trending, topRated, upcoming}}/>
        </div>
    </div>
  )
}

export default HomePage