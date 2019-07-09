import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this);
       handleClick = event => {}
    }
   
    render(){
        return(
            <div>
                <input type='text'></input><span id="search-bar-search" onClick={handleClick}>Search icon</span>
            </div>
        )
}
    
}

export default SearchBar