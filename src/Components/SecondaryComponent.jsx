import CardCarousel from "./CardCarousel"
import PropTypes from 'prop-types'

const SecondaryComponent = ({data}) => {

  const {nowPlaying, popular, trending, topRated, upcoming} = data

  return (
      <div className="relative w-11/12 mx-auto -top-24">
        <CardCarousel title={'Trending'} data = {trending}/>
        <CardCarousel title={'Popular'} data = {popular}/>
        <CardCarousel title={'Top Rated'} data = {topRated}/>
        <CardCarousel title={'Now Playing'} data = {nowPlaying}/>
        <CardCarousel title={'Upcoming'} data = {upcoming}/>
      </div>
  )
}

SecondaryComponent.propTypes = {
    data:  PropTypes.object
}

export default SecondaryComponent