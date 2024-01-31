import { useRef, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import PropTypes from "prop-types";
import { validateEmail } from "../utils/validate";
import ValidateErrorMessage from "./ValidateErrorMessage";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import FormErrorComponent from "./FormErrorComponent";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const SignInForm = ({ setisVisible, isVisible }) => {
  const email = useRef();
  const password = useRef();
  const [isEmailValidate, setisEmailValidate] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!isEmailValidate) return;

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then(() => {
        // Signed in
        navigate("/", {
          replace: true,
        });
      })
      .catch((error) => {
        setErrorMessage(error.code);
      });
  };

  return (
    <div className="bg-black bg-opacity-70 text-white max-w-md w-full py-10 rounded">
      <form action="" className="px-14 py-3" onSubmit={handleFormSubmit}>
        <h1 className="text-3xl font-bold pb-8">Sign In</h1>

        {errorMessage && (
          <div>
            <FormErrorComponent errorCode={errorMessage} />
          </div>
        )}

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
            <ValidateErrorMessage errorMessage={"Please enter a Valid email"} />
          )}
        </div>

        <div
          className="relative w-11/12 py-1"
        >
          <input
            ref={password}
            type= {!showPassword ? "password" : "text"}
            placeholder="Password"
            className="w-full px-3 py-3 rounded bg-stone-800 bg-opacity-50 border border-stone-500 outline-3"
          />

          <button
            className="absolute top-5 right-0 px-2 cursor-pointer opacity-60 text-sm transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              setShowPassword(!showPassword);
            }}
          >
            {!showPassword ? (
              <FontAwesomeIcon
                icon={icon({
                  name: "eye",
                  family: "classic",
                  style: "regular",
                })}
              />
            ) : (
              <FontAwesomeIcon
                icon={icon({
                  name: "eye-slash",
                  family: "classic",
                  style: "regular",
                })}
              />
            )}
          </button>
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
