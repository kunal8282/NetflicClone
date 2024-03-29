import { useRef, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import PropTypes from "prop-types";
import ValidateErrorMessage from "./ValidateErrorMessage";
import { validateEmail, validatePassword } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import FormErrorComponent from "./FormErrorComponent";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const SignUpForm = ({ setisVisible, isVisible }) => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [isEmailValidate, setEmailValidate] = useState(true);
  const [passwordValidate, setPasswordValidate] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleFormSumbit = (e) => {
    e.preventDefault();

    if (!isEmailValidate || passwordValidate) return;

    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then(() => {
        navigate("/");
        updateProfile(auth.currentUser, {
          displayName: name.current.value,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorMessage(errorCode);
      });

    password.current.value = "";
  };

  return (
    <div className="bg-black bg-opacity-70 text-white max-w-md w-full py-10 rounded">
      <form action="" className="px-14 py-3" onSubmit={handleFormSumbit}>
        <h1 className="text-3xl font-bold pb-8">Sign Up</h1>

        {errorMessage && (
          <div>
            <FormErrorComponent errorCode={errorMessage} />
          </div>
        )}

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
              const validate = validateEmail(email.current.value);
              setEmailValidate(validate);
            }}
            onFocus={() => setEmailValidate(true)}
          />
          {!isEmailValidate && (
            <ValidateErrorMessage
              errorMessage={"Please enter valid email address"}
            />
          )}
        </div>

        <div className="py-1 relative w-11/12">
          <input
            required
            ref={password}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-3 py-3 rounded bg-stone-800 bg-opacity-50 border border-stone-500 outline-3"
            onBlur={() => {
              const validate = validatePassword(password.current.value);
              setPasswordValidate(validate);
            }}
            onFocus={() => {
              setPasswordValidate(null);
            }}
          />

          <button
            className="absolute top-5 right-0 px-2 cursor-pointer opacity-60 text-sm transition-opacit"
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

          {passwordValidate && (
            <ValidateErrorMessage errorMessage={passwordValidate} />
          )}
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
  isVisible: PropTypes.bool,
  setisVisible: PropTypes.func,
};

export default SignUpForm;
