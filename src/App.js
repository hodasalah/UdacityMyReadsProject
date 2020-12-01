import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BooksLists from "./BookLists/BooksLists";
import BooksSearch from "./search/BooksSearch";


const bookshelves = [
  { id: "currentlyReading", name: "Currently Reading"},
  { id: "wantToRead", name: "Want to Read" },
  { id: "read", name: "Have Read" },
];
class BooksApp extends React.Component {
  state = {
     books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then(books=>this.setState({books}))
  }
  onChangeShelf = (book, shelf) => {
    
    book.shelf = shelf;
    this.setState(currState => ({
      books: currState.books.filter(b => b.id !== book.id).concat([book])
    }));
    
    BooksAPI.update(book, shelf).then(books=>console.log(books ,shelf))  
  }
  
  render() {
    
    return (
      <div className="app">
        
        <Route
          exact
          path="/"
          render={() => (
            <BooksLists
              shelves={bookshelves}
              books={this.state.books}
              onChangeShelf={this.onChangeShelf}
            />
          )}
        />
        <Route path="/search" render={()=>(
        <BooksSearch onChangeShelf={this.onChangeShelf}/>
        )} />
      </div>
    );
  }
}

export default BooksApp;
