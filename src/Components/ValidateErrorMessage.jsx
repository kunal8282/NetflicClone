import PropTypes from 'prop-types';

const ValidateErrorMessage = ({errorMessage}) => {
  return (
    <div className="text-xs px-2 py-1 text-red-600">{errorMessage}</div>
  )
}

ValidateErrorMessage.propTypes = {
    errorMessage : PropTypes.string
}

export default ValidateErrorMessage