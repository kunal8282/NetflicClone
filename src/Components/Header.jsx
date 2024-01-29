import { NETFLIX_LOGO } from "../utils/constant";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-10 py-2">
        <div className="flex items-center gap-10">
          <div className="w-24">
            <img src={NETFLIX_LOGO} alt="logo" className="w-full" />
          </div>

          <ul className="flex gap-5 text-base">
            <li>Home</li>
            <li>TV Show</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
