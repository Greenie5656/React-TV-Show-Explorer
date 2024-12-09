import { useEffect, useState } from "react";
import ShowCards from "./ShowCards";

const TVShowList = ({ searchTerm }) => {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  
    fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then((response) => {
        return response.json();
      })
      .then((returnedShows) => {
        setShows(returnedShows);
        setIsLoading(false);
      });
  }, [searchTerm]);

  if(isLoading) return <p>Loading</p>;
  

  return (
    <>
      <ul>
        {shows.map((show) => {
          return <ShowCards show={show} key={show.show.id} />;
        })}
      </ul>
    </>
  );
};

export default TVShowList;
