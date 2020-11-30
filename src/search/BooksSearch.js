import React, { Component } from "react";
import SearchBar from "./searchBar/SearchBar";
import SearchResults from "./SearchResults";

class BooksSearch extends Component {
  render() {
    return (
      <div className="search-books">
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}
export default BooksSearch;
