import { useEffect, useState } from "react";
import ShowCards from "./ShowCards";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation.json";
import Format from "./Format";

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

  if (isLoading) {
    return <Lottie animationData={loadingAnimation} />;
  }

  return (
  
      <ul className="tv-show-grid">
        {shows.map((show) => {
          return <Format key ={show.show.id}>  
          <ShowCards show={show}/>
          </Format>;
        })}
      </ul>
  );
};

export default TVShowList;
