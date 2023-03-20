import React from "react";

const SearchBox = () => {
  return (
    <form className="d-flex">
      <input
        className="form-control inputSearch"
        type="search"
        placeholder="Search"
        aria-label="Search"
        title="Buscar peliculas"
      />
    </form>
  );
};

export default SearchBox;
