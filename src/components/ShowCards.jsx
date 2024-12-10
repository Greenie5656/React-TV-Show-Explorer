import { useState } from "react";

const ShowCards = ({ show, highestRating }) => {
  console.log(show);

  const [displayShows, setdisplayShows] = useState(false);

  const handleDisplayShows = () => {
    setdisplayShows(!displayShows);
  };

  return (
    <>
      <h3>{show.show.name}</h3>
      {show.show.image ? (
        <img src={show.show.image.medium} alt="" />
      ) : (
        <p>No Image Available</p>
      )}

      <button className="more-info-button" onClick={handleDisplayShows}>
        {displayShows ? "Hide" : "More Info"}
      </button>

      {displayShows ? (
        <>
          {show.show.rating.average ? (
            <p>Rating: {show.show.rating.average}
            {show.show.rating.average === highestRating && 
              <span> (Highest Rated!)</span>
            }
            </p>
          ) : (
            <p>No Rating Available</p>
          )}

          {show.show.averageRuntime ? (
            <p>Average Runtime: {show.show.averageRuntime}</p>
          ) : (
            <p>No Runtime Available</p>
          )}
          {show.show.type ? (
            <p>Type: {show.show.type}</p>
          ) : (
            <p>No Type Available</p>
          )}
        </>
      ) : null}
    </>
  );
};

export default ShowCards;
