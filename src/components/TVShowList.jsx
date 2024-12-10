import { useEffect, useState } from "react";
import ShowCards from "./ShowCards";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation.json";
import Format from "./Format";

const TVShowList = ({ searchTerm }) => {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

const highestRating = shows
.map(show => show.show.rating.average)
.filter(rating => rating !== null)
.reduce((max, rating) => Math.max(max, rating), 0);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then((response) => {
        return response.json();
      })
      .then((returnedShows) => {
        setShows(returnedShows);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false)
        setIsError(true)
      });
  }, [searchTerm]);

  if (isLoading) {
    return <Lottie animationData={loadingAnimation} />;
  }
  if (isError){
    return <p>Error Returning Data</p>
  }

  if (isError) {
    return <p>Error Returning Data</p>
  }

  return (
    <ul className="tv-show-grid">
      {shows.map((show) => {
        return (
          <Format key={show.show.id}>
            <ShowCards show={show} highestRating={highestRating} />
          </Format>
        );
      })}
    </ul>
  );
};

export default TVShowList;
