import { useRef, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import PropTypes from "prop-types";
import { validateEmail } from "../utils/validate";
import ValidateErrorMessage from "./ValidateErrorMessage";

const SignInForm = ({ setisVisible, isVisible }) => {
  const email = useRef();
  const password = useRef();
  const [isEmailValidate, setisEmailValidate] = useState(true);


  return (
    <div className="bg-black bg-opacity-70 text-white max-w-md w-full py-10 rounded">
      <form
        action=""
        className="px-14 py-3"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="text-3xl font-bold pb-8">Sign In</h1>

        <div className="w-full py-1">
          <input
            required
            ref={email}
            type="text"
            placeholder="Email"
            className="w-11/12 px-3 py-3 rounded bg-stone-800 bg-opacity-50 border border-stone-500 outline-3"
            onBlur={() => {
              const validate = validateEmail(email.current.value);
              setisEmailValidate(validate);
            }}
            onChange={() => setisEmailValidate(true)}
          />

          {!isEmailValidate && (
           <ValidateErrorMessage errorMessage={'Please enter a Valid email'}/>
          )}
        </div>

        <div className="py-1">
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-11/12 px-3 py-3 rounded bg-stone-800 bg-opacity-50 border border-stone-500 outline-3"
          />

        </div>

        <div className="flex flex-col items-center w-11/12">
          <div className="w-full py-3">
            <ButtonComponent title={"Sign In"} />
          </div>
          <a href="">Forget Password?</a>
        </div>
      </form>

      <div className="px-14 py-5">
        New to Netflix ?{" "}
        <button onClick={() => setisVisible(!isVisible)}>Sign Up Now</button>
      </div>
    </div>
  );
};

SignInForm.propTypes = {
  isVisible: PropTypes.bool,
  setisVisible: PropTypes.func,
};

export default SignInForm;
