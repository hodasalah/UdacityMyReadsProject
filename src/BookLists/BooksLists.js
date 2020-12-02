import React from "react";

import SearchButton from "./SearchButton";
import BookShelves from "./BookShelves/BookShelves";
import Nav from "../Nav";

const BooksLists = (props) => {
  const { shelves, books, onChangeShelf } = props;
  return (
    <div className="list-books">
      <Nav />
      <BookShelves
        shelvesSections={shelves}
        books={books}
        onChangeShelf={onChangeShelf}
      />
      <SearchButton />
    </div>
  );
};
export default BooksLists;
