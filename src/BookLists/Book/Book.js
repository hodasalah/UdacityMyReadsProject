import React from "react";
import Rating from "../../Rating";
import ChangeShelf from "./ChangeShelf";

const Book = (props) => {
  const { book, shelf, changeShelf } = props;
  
    const background = `url(${book.imageLinks ? book.imageLinks.thumbnail : './bg.png'})`;
  
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: background,
            }}
          />
          <ChangeShelf book={book} shelf={shelf} onShelf={changeShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
        <Rating book={book} />
      </div>
    </li>
  );
};

export default Book;
