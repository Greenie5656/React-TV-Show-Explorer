const ShowCards = ({ show }) => {
  return (
    <>
      <h3>{show.show.name}</h3>
      {show.show.image ? <img src={show.show.image.medium} alt="" /> : <p>No Image Available</p>}
      {show.show.rating.average ? <p>Rating: {show.show.rating.average}</p> : <p>No Rating Available</p>}
    </>
  );
};

export default ShowCards;
