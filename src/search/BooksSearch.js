import React, { Component } from "react";
import SearchBar from "./searchBar/SearchBar";
import SearchResults from "./SearchResults";
import * as BooksAPI from '../BooksAPI';

class BooksSearch extends Component {
  state = {
    query: '',
    newBooks: [],
    searchErr: false
  };
  getBooks = val => { 
    this.setState({ query :val });
    if (val) {
      BooksAPI.search(val.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ newBooks: books, searchErr: false })
          : this.setState({ newBooks: [], searchErr: true });
      });

    } else this.setState({ newBooks: [], searchErr: false });
  };
  render() {
    return (
      <div className="search-books">
        <SearchBar getBooks={this.getBooks}/>
        <SearchResults 
          onChangeShelf={this.props.onChangeShelf}
          books={this.state.newBooks}
          searchErr={this.state.searchErr}/>
      </div>
    );
  }
}
export default BooksSearch;
