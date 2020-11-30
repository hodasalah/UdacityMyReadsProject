import React from "react";
import CloseSearchButton from "./CloseSearchButton";
import InputSearch from "./InputSearch";

const SearchBar = () => {
  
    return (
      <div className="search-books-bar">
        <CloseSearchButton />
        <InputSearch />
      </div>
    );
  
}
export default SearchBar;
