import React from "react";
import CloseSearchButton from "./CloseSearchButton";
import InputSearch from "./InputSearch";

const SearchBar = (props) => {
    
    return (
      <div className="search-books-bar">
        <CloseSearchButton />
        <InputSearch getBooks={props.getBooks}/>
      </div>
    );
  
}
export default SearchBar;
