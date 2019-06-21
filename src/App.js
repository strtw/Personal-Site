import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './components/CodePenCard.js';
import summaryData from './summaryData.js'
import Button from '@material-ui/core/Button';
import CodePenCard from './components/CodePenCard.js';
import TextSummary from './components/TextSummary.js'

const data = {
  height:200,
  width:400,
  titles:"KEoLaV",
  penUrl:"//codepen.io/stw/embed/KEoLaV/?height=228&theme-id=0&default-tab=html,result"
}



function App() {
  const summaryComponents = summaryData.map(project=> {
    return (
      <TextSummary title={project.title} summary={project.summary}/>
    )
  })
  return (
    <div className="App">
      <header>
       
      </header>
      <Button variant="contained" color="primary">
      Hello World
    </Button>
    <CodePenCard height={data.height} width={data.width} title={data.titles} src={data.penUrl}/>
    {summaryComponents}
  
    </div>
  );
}

export default App;
