
import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import './components/CodePenCard.js';
import summaryData from './summaryData.js'
import Button from '@material-ui/core/Button';
import CodePenCard from './components/CodePenCard.js';
import TextSummary from './components/TextSummary.js';
import Searchbar from './components/SearchBar.js';
import { tsIndexSignature, exportDefaultSpecifier } from '@babel/types';


const data = {
  height:200,
  width:400,
  titles:"KEoLaV",
  penUrl:"//codepen.io/stw/embed/KEoLaV/?height=228&theme-id=0&default-tab=html,result"
}



class App extends Component{

  constructor(props){
    super(props)
    this.updateApp = this.updateApp.bind(this);
    this.state = {
      summaryData:summaryData,
      searchQuery:""
    };
  }

  getSearchQueryP = (childQueryData) => {
    this.setState({searchQuery:childQueryData})
  }

searchResultsObj = (index,query) => {
  let result = index.search(query);
  return result;
}


loadProjectToSearchIndex = (data) =>{
  var index = window.elasticlunr(function () {
    this.addField('title');
    this.addField('summary');
    this.addField('tags');
    this.setRef('id');
  });
  data.forEach(function(project){
    index.addDoc(project)
  })
  return index;
}

matchSearchToIndex = (results) =>{
  
  let arrayOfIDs = [];
  
 results.forEach(function(project){
   let id = project.ref;
   arrayOfIDs.push(id);
  })

  return arrayOfIDs;
}


  updateApp = ()=>{
    let searchIndex = this.loadProjectToSearchIndex(summaryData.data);
    let searchResults = this.searchResultsObj(searchIndex, this.state.searchQuery);
    let matchedProjectIDS = this.matchSearchToIndex(searchResults,this.state.summaryData.data);
   
     return matchedProjectIDS;
    }


  render(){
    console.log(this.state.summaryData);
    let projectMatch = false;
    let matchedProjectIDS = this.updateApp();
    let summaryComponents = this.state.summaryData.data.map(project=> {
    if(this.state.searchQuery !== ""){
      for(let id of matchedProjectIDS){
        if(id == project.id){
          projectMatch = true;
          break;
         }else{
        projectMatch  = false;
        }
      } 
    }else{
      if(project.featured === true){
        projectMatch = true;
      }else{
        projectMatch = false;
      }
    }
      
      return (
        <TextSummary display={projectMatch ? 'block' : 'none'} key={project.id} title={project.title} summary={project.summary} repository={project.repository} presentation={project.presentation} demo={project.demo} tags={project.tags}/>
      )
    })
    

    return (
      <div className="App">
        <header>
          <h1 className='main-title'>Stu Wood</h1>
        </header>
        <div className="about">
          <p>Hi, I'm Stu. I'm a San Diego, CA based front-end engineer who as been developing professionally for 3+ years. Competencies include responsive user interfaces, data intensive applications, data visualizations, and Vanilla JS tracking snippets</p>
         
          <p>I value code-as-communication and strive to write well-documented, maintainable code. I enjoy learning deeply and broadly, and strive to be 'T-shaped' in my knoweldge.</p>
          <p>I love being a developer because I have the priviledge of spending my working hours creatively solving problems, learning, and engaging with really smart people</p>
         
          <p>In my free time I enjoy surfing, gardening, cooking, and trying out new restaurants/breweries. I also dabble in performing at open mics.</p>
        </div>
      {/*  <Button variant="contained" color="primary">
        Hello World
      </Button>*/}
     {/*} <CodePenCard height={data.height} width={data.width} title={data.titles} src={data.penUrl}/>*/}
      
      <h2>Work Samples</h2>
      <p>Below are some featured projects, with the option to search a larger catalog of samples</p>
      <Searchbar getSearchQuery={this.getSearchQueryP}></Searchbar>
      <div className="project_container">
          {summaryComponents} 
      </div>
      
    
      </div>
    );
  }
 
  
}

export default App;
