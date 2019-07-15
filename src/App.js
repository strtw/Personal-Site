
import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import './components/CodePenCard.js';
import summaryData from './summaryData.js'
import Button from '@material-ui/core/Button';
import CodePenCard from './components/CodePenCard.js';
import TextSummary from './components/TextSummary.js';
import Searchbar from './components/SearchBar.js';
import { tsIndexSignature } from '@babel/types';


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

filterProjects = (index,query) => {
  let result = index.search(query);
  return result;
}


loadProjectToSearchIndex = (data) =>{
  var index = window.elasticlunr(function () {
    this.addField('title');
    this.addField('summary');
    this.setRef('id');
  });
  data.forEach(function(project){
    index.addDoc(project)
  })
  return index;
}

/*updateResultDisplay = (filteredArray, allProjects) =>{
  
  let result = [];
  
  allProject.forEach(function(project){
    project.diplay = false; //set all projects to be hidden at beginning of search
  })
  
  
  filteredArray.forEach(function(project){
   let id = project.id;
  })

  result.forEach(function(project){
    
  })
}*/

componentDidUpdate(){
 let searchIndex = this.loadProjectToSearchIndex(summaryData.data);
 let filteredProjects = this.filterProjects(searchIndex, this.state.searchQuery);
console.log(filteredProjects);
this.updateResultDisplay(filteredProjects,this.state.summaryData.data);

}

  render(){
    console.log(this.state.summaryData);
    let summaryComponents = this.state.summaryData.data.map(project=> {
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
      <Searchbar getSearchQuery={this.getSearchQueryP} projects={this.state.summaryData}></Searchbar>
      {summaryComponents}
    
      </div>
    );
  }
 
  
}

export default App;
