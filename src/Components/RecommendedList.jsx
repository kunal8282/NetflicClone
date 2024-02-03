import CardCarousel from "./CardCarousel"
import { useState } from "react"
import { fetchData } from "../utils/api"
import { options } from "../utils/constant"
import PropTypes from "prop-types"
import {useSelector} from "react-redux"

const RecommendedList = ({id}) => {

  const [reconmendedMovies, setReconmendedMovies] = useState([])
  const trendingMovies = useSelector((store) => store?.movie?.trending)

  useState(() => {
    const fetchRecommendedMovies = async () => {
      try {
        const response = await fetchData(
          `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
          options
        );
        setReconmendedMovies(response.results);
      
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecommendedMovies()
  }, [id])


  if(reconmendedMovies.length === 0) {
    return <CardCarousel title={"You may Like it"} data = {trendingMovies}/>
  }

  return (
    <div >
        <CardCarousel title={"You may Like it"} data = {reconmendedMovies}/>
    </div>
  )
}

RecommendedList.propTypes = {
    id : PropTypes.string.isRequired
}

export default RecommendedList