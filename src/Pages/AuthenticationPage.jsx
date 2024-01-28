import { useState } from "react";
import SignInForm from "../Components/SignInForm";
import SignUpForm from "../Components/SignUpForm";
import { NETFLIX_BG_BANNER, NETFLIX_LOGO } from "../utils/constant";

const AuthenticationPage = () => {
  const [isVisible, setisVisible] = useState(true);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute w-full h-full bg-black bg-opacity-60">
        <div className="relative w-48 left-40 top-1">
          <img src={NETFLIX_LOGO} alt="logo" className="w-full" />
        </div>

        <div className="flex py-2 justify-center">
          {!isVisible ? (
            <SignInForm setisVisible={setisVisible} isVisible={isVisible} />
          ) : (
            <SignUpForm setisVisible={setisVisible} isVisible={isVisible} />
          )}
        </div>

        <footer className="absolute w-full bg-black bg-opacity-50 text-white flex justify-center py-3 bottom-0">
          <h2>Made by Kunal Hiwale</h2>
        </footer>
      </div>

      <div className="h-screen">
        <img
          src={NETFLIX_BG_BANNER}
          alt="banner"
          className="bg-black bg-opacity-30 w-full"
        />
      </div>
    </div>
  );
};

export default AuthenticationPage;
