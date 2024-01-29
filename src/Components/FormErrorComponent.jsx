import PropTypes from 'prop-types';

const FormErrorComponent = ({errorCode}) => {
  return (
    <div className="bg-yellow-600 w-11/12 px-2 rounded py-1 text-sm mb-4 font-semibold">
        { errorCode }
    </div>
  )
}

FormErrorComponent.propTypes = {
  errorCode : PropTypes.string
}

export default FormErrorComponent