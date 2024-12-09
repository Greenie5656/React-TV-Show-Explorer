const ShowCards = ({ show }) => {
  return (
    <>
      <h3>{show.show.name}</h3>
      {show.show.rating ? <p>Rating: {show.show.rating.average}</p> : null}
      {show.show.image ? <img src={show.show.image.medium} alt="" /> : null}
    </>
  );
};

export default ShowCards;
