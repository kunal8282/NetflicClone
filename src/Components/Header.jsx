import { NETFLIX_LOGO } from "../utils/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import DropDownBox from './DropDownBox'
import { useState } from "react";

const Header = () => {
  
  const [isVisibleDropDown, setisVisibleDropDown] = useState(false);

  const handleDropDownClick = () => {
    setisVisibleDropDown(!isVisibleDropDown)
  }

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-8">
          <div className="w-24">
            <img src={NETFLIX_LOGO} alt="logo" className="w-full" />
          </div>

          <ul className="flex gap-5 text-sm font-semibold">
            <li>Home</li>
            <li>TV Show</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
          </ul>
        </div>

        <div className="flex items-center gap-5 relative w-2/12 justify-end">
          <button className="text-lg ">
            <FontAwesomeIcon
              icon={icon({
                name: "magnifying-glass",
                family: "classic",
                style: "solid",
              })}
            />
          </button>

          <button className="text-lg">
            <FontAwesomeIcon
              icon={icon({ name: "bell", family: "classic", style: "regular" })}
            />
          </button>

          <div className="w-9 flex items-center gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
              alt=""
              className="rounded"
            />
            <button onClick={handleDropDownClick}>
              <FontAwesomeIcon
                icon={icon({
                  name: "caret-down",
                  family: "classic",
                  style: "solid",
                })}

                className= {`${isVisibleDropDown && 'rotate-180'} transition-transform`}
              />
            </button>
          </div>

         {isVisibleDropDown && <div className = "absolute right-0 top-10 w-full">
              <DropDownBox />
          </div>  }      

        </div>
      </div>
    </div>
  );
};

export default Header;
