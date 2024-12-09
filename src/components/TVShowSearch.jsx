import { useState } from "react";

const TVShowSearch = ({ setSearchTerm }) => {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(event) {
    setSearchInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchInput);
    setSearchInput("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Search: </label>
        <input
          placeholder="Search TV shows..."
          type="text"
          onChange={handleChange}
          value={searchInput}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
};

export default TVShowSearch;