import React from "react";
import Rating from "../../Rating";
import ChangeShelf from './ChangeShelf';

const Book=(props)=> {
  const {book ,shelf ,changeShelf}=props
  
  return(
    <React.Fragment>
    { book ?(
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
          <Rating book={book}/>
        </div>
      </li>
    ): ''}
    </React.Fragment>
  );
}

export default Book;
