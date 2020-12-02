import React from "react";
import BooksShelf from "./BooksShelf";

const BookShelves = (props) => {
  const { shelvesSections, books, onChangeShelf } = props;
  return (
    <div className="list-books-content">
      <div>
        {shelvesSections.map((sec) => (
          <BooksShelf
            key={sec.id}
            shelf={sec}
            books={books}
            onChangeShelf={onChangeShelf}
          />
        ))}
      </div>
    </div>
  );
};
export default BookShelves;
