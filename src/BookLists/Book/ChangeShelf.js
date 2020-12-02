import React from "react";

const ChangeShelf = (props) => {
  const { onShelf, books, book } = props;
  const handleChange = (e) => {
    onShelf(book, e.target.value);
  };

  let currentShelf = "none";
  for (let item of books) {
    if (item.id === book.id) {
      currentShelf = item.shelf;
      break;
    }
  }

  return (
    <div className="book-shelf-changer">
      <select onChange={handleChange} defaultValue={currentShelf}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
export default ChangeShelf;
