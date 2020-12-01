import React, { Component } from 'react'

import SearchButton from './SearchButton'
import BookShelves from './BookShelves/BookShelves';
import Nav from '../Nav';

class BooksLists extends Component {
     
    render() {
        const {shelves ,books , onChangeShelf} = this.props;
        return (
            <div className="list-books">
                <Nav/>
                <BookShelves shelvesSections={shelves} books={books} onChangeShelf={onChangeShelf}/>
                <SearchButton />
            </div>
        )
    }
}
export default BooksLists;
