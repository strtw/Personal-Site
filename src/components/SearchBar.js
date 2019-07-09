import React from 'react';

function SearchBar(props){
    const handleClick = event => {
console.log('yes');
    }
    return(
        <div>
            <input type='text'></input><span id="search-bar-search" onClick={handleClick}>Search icon</span>
        </div>
    )
}

export default SearchBar