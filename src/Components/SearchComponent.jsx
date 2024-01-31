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

  console.log(searchResult);

  return (
    <div className="h-screen bg-black">
      <div className="py-16 w-11/12 m-auto">
          <SearchFormComponent searchData={searchData} />
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
