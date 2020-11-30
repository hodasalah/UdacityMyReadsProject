import React from "react";
import ChangeShelf from './ChangeShelf';

const Book=(props)=> {
  const {book ,shelf ,changeShelf}=props
  
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url(${book.imageLinks.thumbnail})`,
            }}
          />
          <ChangeShelf book={book} shelf={shelf} onShelf={changeShelf}/>
        </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
}

export default Book;
