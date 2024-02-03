import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "./CardComponent";
import PropTypes from 'prop-types'


const CardCarousel = ({ title , data }) => {

  const settings = {
    dot : false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
  };

  return (
    <div className="py-4">
       <h1 className="text-2xl font-semibold py-3 z-10 relative">{title}</h1> 
      <Slider {...settings}>
        {data &&
          data?.map((items) => <CardComponent key={items.id} {...items} />)}
      </Slider>
    </div>
  );
};

CardCarousel.propTypes = {
    title: PropTypes.string,
    data:  PropTypes.array
};

export default CardCarousel;
