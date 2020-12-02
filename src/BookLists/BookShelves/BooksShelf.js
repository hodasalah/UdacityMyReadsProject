import React from "react";
import Book from "../Book/Book";

const BooksShelf = (props) => {
  const { shelf, books, onChangeShelf } = props;
  const shelvesBooks = books.filter((book) => book.shelf === shelf.id);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelvesBooks.map((book) => (
            <Book
              key={book.id}
              books={books}
              book={book}
              shelf={shelf}
              changeShelf={onChangeShelf}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BooksShelf;
