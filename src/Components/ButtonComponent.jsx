import PropTypes from 'prop-types';

const ButtonComponent = ({title}) => {
  return (
    <button className="bg-red-700 py-2 rounded w-full">{title}</button>
  )
}

ButtonComponent.propTypes = {
    title : PropTypes.string
}



export default ButtonComponent