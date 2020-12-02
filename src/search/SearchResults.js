import React from 'react'
import Book from './../BookLists/Book/Book';
const SearchResults=(props)=> {
  const{newBooks , books ,onChangeShelf}=props
    return (
        <div className="search-books-results">
          {newBooks.length > 0 ? (
            <React.Fragment>
              <h3>we Found {newBooks.length} books </h3>
              <ol className="books-grid" >
                {newBooks.map(book=>(
                    <Book 
                    key={book.id} 
                    book={book} 
                    books={books}
                    changeShelf={onChangeShelf}
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
