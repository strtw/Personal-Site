//import React from "react"

//export default () => <div>Hello world!</div>



import React, {Component} from 'react';
//import logo from './logo.svg';
import '../styles/global.css';
import '../components/CodePenCard.js';
import summaryData from '../summaryData'
import CodePenCard from '../components/CodePenCard.js';
import TextSummary from '../components/TextSummary.js';
import Searchbar from '../components/SearchBar.js';
import { tsIndexSignature, exportDefaultSpecifier } from '@babel/types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
//import SEO from "../components/seo";

library.add(fab, faEnvelope)


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
    if (typeof window !== `undefined`) {
      let searchIndex = this.loadProjectToSearchIndex(summaryData.data);
      let searchResults = this.searchResultsObj(searchIndex, this.state.searchQuery);
      let matchedProjectIDS = this.matchSearchToIndex(searchResults,this.state.summaryData.data);
     
       return matchedProjectIDS;
    }
  
    }


  render(){
    console.log(this.state.summaryData);
    let projectMatch = false;
    let matchedProjectIDS = this.updateApp();
    let summaryComponents = this.state.summaryData.data.map(project=> {
    if(this.state.searchQuery !== "" && matchedProjectIDS){
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
      /*<SEO></SEO>*/
      <div className="App">
        <div className="cover">
        <div className="social-icons">
          <span className='icon'><a href="mailto:hello@stu-wood.com"><FontAwesomeIcon icon="envelope" size='2x' color="white"></FontAwesomeIcon></a></span>
          <span className='icon'><a href="https://github.com/strtw" target="blank"><FontAwesomeIcon icon={['fab','github']} size="2x" color="white"></FontAwesomeIcon></a></span>
          <span className='icon'><a href="https://www.linkedin.com/in/stu-wood/" target="blank"><FontAwesomeIcon icon={['fab','linkedin']} size="2x" color="white"></FontAwesomeIcon></a></span>
          <span className='icon'><a href="https://twitter.com/Stuart_Wood" target="blank"><FontAwesomeIcon icon={['fab','twitter']}size="2x" color="white"></FontAwesomeIcon></a></span>
        </div>
            <header>
              <h1 className='main-title'>Stuart Wood</h1>
              <h2>Front-end Engineer</h2>
              <div className="profile-pic-container">
                 <img className="profile-pic" src={require('../images/stu-profile.png')}></img>
              </div>
             
            </header>
        </div>
        <div className="about">
          <h1>About</h1>
              <p>I'm a San Diego, CA based front-end engineer who has been designing/developing professionally for 3+ years. I have 7+ years experience in Digital Analytics and Marketing Tech in various roles including implementation, marketing, client services, and business development. Current competencies include responsive user interface components, data intensive applications, data visualization, and Vanilla JS tracking snippets. I value code-as-communication and strive to write well-documented, maintainable programs. I enjoy learning deeply and broadly, and strive to be 'T-shaped' in my knowledge.</p>

              <p>I love being a developer because I have the privilege of spending my working hours creatively solving problems, learning, and engaging with really smart people. </p>
              <p><a href="https://photos.app.goo.gl/xYUR2Q1pQcVMKPYH8" target="blank">In my free time</a> I enjoy international travel, surfing, gardening, cooking, and trying out new restaurants/breweries. I also dabble in performing at open mics.</p>
        </div>
       

      {/*  <Button variant="contained" color="primary">
        Hello World
      </Button>*/}
     {/*} <CodePenCard height={data.height} width={data.width} title={data.titles} src={data.penUrl}/>*/}
        <div className='projects'>
          <h1>Work Samples</h1>
          <p>Below are some featured projects, with the option to search a larger catalog of samples</p>
          <Searchbar getSearchQuery={this.getSearchQueryP}></Searchbar>
          <div className="project_container">
              {summaryComponents} 
          </div>
        </div>
      </div>
    );
  }
 
  
}

export default App;
