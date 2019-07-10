import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(){
        super()
        this.state = {
            inputValue:''
        };

    }

    handleClick(){
        console.log("yes");
    }
   
    render(){
        return(
            <div>
                <input type='text' value={this.state.inputValue}></input><span id="search-bar-search" onClick={evt => this.handleClick(evt)}>Search icon</span>
            </div>
        )
}
    
}

export default SearchBar