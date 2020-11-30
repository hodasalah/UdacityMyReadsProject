import React, { Component } from "react";

export default class InputSearch extends Component {
  state={
    value:''
  }
  handleSearch=(e)=>{
    this.props.getBooks(e.target.value)
    this.setState({value:e.target.value})
  }
  render() {
    return (
      <div className="search-books-input-wrapper">
        <input type="text" 
          placeholder="Search by title or author"
          value={this.state.value}
          onChange={this.handleSearch} />
      </div>
    );
  }
}
