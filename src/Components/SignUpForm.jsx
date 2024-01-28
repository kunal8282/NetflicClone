import { useRef, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import PropTypes from "prop-types";
import ValidateErrorMessage from "./ValidateErrorMessage";
import { validateEmail, validatePassword } from "../utils/validate";

const SignUpForm = ({ setisVisible, isVisible }) => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [isEmailValidate, setEmailValidate] = useState(true);
  const [passwordValidate, setPasswordValidate] = useState(null)

  return (
    <div className="bg-black bg-opacity-70 text-white max-w-md w-full py-10 rounded">
      <form
        action=""
        className="px-14 py-3"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="text-3xl font-bold pb-8">Sign Up</h1>

        <div className="w-full py-1">
          <input
            required
            ref={name}
            type="text"
            placeholder="Name"
            className="w-11/12 px-3 py-3 rounded bg-stone-800 bg-opacity-50 border border-stone-500 outline-3"
          />
        </div>

        <div className="w-full py-1">
          <input
            required
            ref={email}
            type="text"
            placeholder="Email"
            className="w-11/12 px-3 py-3 rounded bg-stone-800 bg-opacity-50 border border-stone-500 outline-3"
            onBlur={() => {
              const validate = validateEmail(email.current.value)
              setEmailValidate(validate)
            }}

            onFocus={() => setEmailValidate(true)}
          />
          {!isEmailValidate && (
            <ValidateErrorMessage errorMessage={'Please enter valid email address'}/>
          )}
        </div>

        <div className="py-1">
          <input
            required
            ref={password}
            type="password"
            placeholder="Password"
            className="w-11/12 px-3 py-3 rounded bg-stone-800 bg-opacity-50 border border-stone-500 outline-3"
            onBlur={() => {
              const validate = validatePassword(password.current.value)
              setPasswordValidate(validate)
            }}

            onFocus={() => setPasswordValidate(null)}
          />

          {
            passwordValidate && <ValidateErrorMessage errorMessage={passwordValidate}/>
          }
        </div>

        <div className="flex flex-col items-center w-11/12">
          <div className="w-full py-3">
            <ButtonComponent title={"Sign Up"} />
          </div>
        </div>
      </form>

      <div className="px-14 py-5">
        Already User ?{" "}
        <button onClick={() => setisVisible(!isVisible)}>Sign In Now</button>
      </div>
    </div>
  );
};

SignUpForm.propTypes = {
  isVisible: PropTypes.object,
  setisVisible: PropTypes.func,
};

export default SignUpForm;
