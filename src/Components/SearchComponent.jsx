import { useState } from "react";
import { fetchData } from "../utils/api";
import { options } from "../utils/constant";
import SearchFormComponent from "./SearchFormComponent";
import Loader from "./Loader";
import CardList from "./CardList";

const SearchComponent = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(undefined);
  const [error, setError] = useState(null);
  document.title = "Search - Netflix";

  const searchData = async (searchText) => {
    setLoading(true);
    try {
      const response = await fetchData( 
        `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`,
        options
      );
      setSearchResult(response.results);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if(error) return <div className="text-xl flex justify-center items-center h-screen">Something went wrong</div>

  return (
    <div className="h-screen bg-black">
      <div className="flex justify-center items-center w-full pt-16 pb-4">
          <SearchFormComponent searchData={searchData} placeholder = {"Search for movies, TV Shows and More"}/>
      </div>

      {
        loading ? <div className="flex justify-center items-center h-4/6">
          <Loader />
        </div> : 
        <div>
          <div className="bg-black px-5">
              <CardList data={searchResult} />
          </div>
        </div>
      }

    </div>
  );
};

export default SearchComponent;
