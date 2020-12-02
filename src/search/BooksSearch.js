import React from "react";
import SearchBar from "./searchBar/SearchBar";
import SearchResults from "./SearchResults";

const BooksSearch = (props) => {
  const { getBooks, onChangeShelf, newBooks, books, searchErr } = props;
  return (
    <div className="search-books">
      <SearchBar getBooks={getBooks} />
      <SearchResults
        onChangeShelf={onChangeShelf}
        newBooks={newBooks}
        books={books}
        searchErr={searchErr}
      />
    </div>
  );
};
export default BooksSearch;
