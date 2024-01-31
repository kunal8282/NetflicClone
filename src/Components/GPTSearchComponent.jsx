import { openai } from "../utils/openAI";
import { fetchData } from "../utils/api";
import { options } from "../utils/constant";
import { useState } from "react";
import CardList from "./CardList";
import Loader from "./Loader";
import SearchFormComponent from "./SearchFormComponent";

const GPTSearchComponent = () => {
  const [gptSearchResult, setGPTSearchResult] = useState({});
  const [isLoad, setisLoad] = useState(undefined);

  const handleformSumbit = async (searchText) => {  
    setisLoad(false);
    const queryText = `Act as an movies recommendation system and suggest movies for the query ${searchText} + ". Only Give me only 5 movies, comma seperated like the example result given ahead. Example Result : Your Name, Don, Interstellar, Batman, Koi Mil Gaya " `;

    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: queryText }],
        model: "gpt-3.5-turbo",
      });

      const results = gptResults.choices[0]?.message?.content.split(",");

      const moviesData = results.map((element) =>
        fetchData(
          `https://api.themoviedb.org/3/search/movie?query=${element}&include_adult=false&language=en-US&page=1`,
          options
        )
      );

      const moviesDataPromise = await Promise.all(moviesData);
      setGPTSearchResult({
        moviesName: results,
        moviesData: moviesDataPromise,
      });
      setisLoad(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black w-full h-screen">
      <div className="pt-16 pb-4 flex justify-center items-center w-full">
        <SearchFormComponent searchData={handleformSumbit} placeholder = {"What on Your Mind? "}/>
      </div>

      {isLoad === false && <div className="text-white flex justify-center items-center h-3/">
          <Loader />
        </div>}

      <div className="bg-black">
        {isLoad && (
          <div className="text-white  w-11/12 m-auto">
            <h1 className="font-bold text-3xl py-3">
              Here are the some movies maybe you like
            </h1>

            {gptSearchResult.moviesName?.map((element, index) => {
              return (
                <div key={index}>
                  <h1 className="font-bold text-2xl">{element}</h1>
                  <CardList
                    key={index}
                    title={element}
                    data={gptSearchResult?.moviesData[index]?.results.slice(0, 5)}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default GPTSearchComponent;
