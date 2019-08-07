
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

//componentDidUpdate(){
  updateApp = ()=>{
    let searchIndex = this.loadProjectToSearchIndex(summaryData.data);
    let searchResults = this.searchResultsObj(searchIndex, this.state.searchQuery);
    let matchedProjectIDS = this.matchSearchToIndex(searchResults,this.state.summaryData.data);
    /*this.setState({

    })*/
    /*this.setState({
      summaryData:{data:[{display: 
        matchedProjectIDS.forEach((value)=>{
          this.state.summaryData.data.forEach((project)=>{
            if(project.id == value){
              return true;
            }else{
              return false; 
            }
          })
         
        })
       }]
      }})*/
     return matchedProjectIDS;
    }


 
 
//}



  render(){
    console.log(this.state.summaryData);
    let projectMatch;
    let matchedProjectIDS = this.updateApp();
    let summaryComponents = this.state.summaryData.data.map(project=> {
      matchedProjectIDS.forEach((id)=>{
        if(id == project.id){
            projectMatch = true;
        }
      })
      return (
        <TextSummary display={projectMatch ? 'block' : 'none'} key={project.id} title={project.title} summary={project.summary} repository={project.repository} demo={project.demo} tags={project.tags}/>
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
