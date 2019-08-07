import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(){
        super()
        this.state = {
            inputValue:'',
        };

    }
    handleClick(e){
       this.sendQuery();
    }

    handleKeyPress(e){
            this.setState({inputValue:e.currentTarget.value});
    }

    

    sendQuery = () =>{
        this.props.getSearchQuery(this.state.inputValue);
    }
   
    render(){
        return(
            <div>
                <input type='text' value={this.state.inputValue} onChange={evt => this.handleKeyPress(evt)}></input><span id="search-bar-search" onClick={evt => this.handleClick(evt)}>Search icon</span>
            </div>
        )
}
    
}

export default SearchBar