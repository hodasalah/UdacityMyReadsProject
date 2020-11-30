import React, { Component } from 'react'
import BooksShelf from './BooksShelf';

class BookShelves extends Component {
    render() {
        const {shelvesSections , books , onChangeShelf} = this.props;
        
        return (
            <div className="list-books-content">
                <div>
                    {shelvesSections.map(sec=>(
                        <BooksShelf key={sec.id} shelf={sec} books={books} onChangeShelf={onChangeShelf}/>
                    ))}
                </div>  
            </div>
        )
    }
}
export default BookShelves;
