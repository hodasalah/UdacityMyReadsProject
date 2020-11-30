import React from 'react'
import Book from './../BookLists/Book/Book';
const SearchResults=(props)=> {
    return (
        <div className="search-books-results">
          {props.books.length > 0 ? (
            <React.Fragment>
              <h3>we Found {props.books.length} books </h3>
              <ol className="books-grid" >
                {props.books.map(book=>(
                  <Book 
                    key={book.id} 
                    book={book} 
                    books={props.books}
                    changeShelf={props.onChangeShelf}
                  />
                ))}
              </ol>
            </React.Fragment>
          ):(
            <h3>search your favourite books</h3>
          )}
          { props.searchErr && (<h2>Sorry We Don't Find What You Want</h2>)}
          
        </div>
    )
}

export default SearchResults
