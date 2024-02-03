import PropTypes from 'prop-types';

const ButtonComponent = ({title ,children}) => {
  return (
    <button className="bg-red-700 py-2 rounded w-full flex items-center justify-center">
      {children}
      {title}
    </button>
  )
}

ButtonComponent.propTypes = {
    title : PropTypes.string,
    children : PropTypes.any
}



export default ButtonComponent