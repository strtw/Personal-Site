
import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import './components/CodePenCard.js';
import summaryData from './summaryData.js'
import Button from '@material-ui/core/Button';
import CodePenCard from './components/CodePenCard.js';
import TextSummary from './components/TextSummary.js';
import Searchbar from './components/SearchBar.js';


const data = {
  height:200,
  width:400,
  titles:"KEoLaV",
  penUrl:"//codepen.io/stw/embed/KEoLaV/?height=228&theme-id=0&default-tab=html,result"
}



class App extends Component{

  constructor(){
    super()
    this.state = {
      summaryData:summaryData,
      searchQuery:""
    };
  }

  getSearchQueryP = (childQueryData) => {
    this.setState({searchQuery:childQueryData})
  }

filterProjects = (data) => {
  console.log(data);
}

  render(){
    const summaryComponents = this.state.summaryData.map(project=> {
      return (
        <TextSummary display={project.display} key={project.id} title={project.title} summary={project.summary} repository={project.repository} demo={project.demo} tags={project.tags}/>
      )
    })
    return (
      <div className="App">
        <header>
         
        </header>
        <Button variant="contained" color="primary">
        Hello World
      </Button>
     {/*} <CodePenCard height={data.height} width={data.width} title={data.titles} src={data.penUrl}/>*/}
      <Searchbar getSearchQuery={this.getSearchQueryP}></Searchbar>
      {summaryComponents}
    
      </div>
    );
  }
 
  
}

export default App;
