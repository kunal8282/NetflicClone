import PropTypes from 'prop-types';

const ButtonComponent = ({title ,children}) => {
  return (
    <button className="bg-red-700 py-2 rounded w-full">
      {children}
      {title}
    </button>
  )
}

ButtonComponent.propTypes = {
    title : PropTypes.string,
    children : PropTypes.node
}



export default ButtonComponent