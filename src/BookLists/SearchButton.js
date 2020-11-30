import React from 'react'
import {Link} from 'react-router-dom';

const SearchButton =() =>{
    
        return (
            <Link  to="/search" className="open-search">
              <button >Add a book</button>
            </Link>
        )
}
export default SearchButton;
