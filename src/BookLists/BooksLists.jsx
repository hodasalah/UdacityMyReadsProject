import React, { Component } from 'react'

import SearchButton from './SearchButton'
import BookShelves from './BookShelves/BookShelves';

class BooksLists extends Component {
     
    render() {
        const {shelves ,books , onChangeShelf} = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <BookShelves shelvesSections={shelves} books={books} onChangeShelf={onChangeShelf}/>
                <SearchButton />
            </div>
        )
    }
}
export default BooksLists;
