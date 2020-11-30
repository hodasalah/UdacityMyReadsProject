import React, { Component } from 'react'

export default class ChangeShelf extends Component {
    state={
        shelf: ""
    }
    handleChange=e=>{
        this.setState({shelf:e.target.value}) 
        this.props.onShelf(this.props.book ,e.target.value)
           
    }
    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.state.shelf} onChange={(e)=>this.handleChange(e)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}
