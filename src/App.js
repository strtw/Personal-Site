import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './components/CodePenCard.js';
import Button from '@material-ui/core/Button';
import CodePenCard from './components/CodePenCard.js';
import TextSummary from './components/TextSummary.js'

const data = {
  height:200,
  width:400,
  titles:"KEoLaV",
  penUrl:"//codepen.io/stw/embed/KEoLaV/?height=228&theme-id=0&default-tab=html,result"
}

const summaryData = {
  title: "This is the title",
  summary: "This is the summary"
}

function App() {
  console.log(data);
  return (
    <div className="App">
      <header>
       
      </header>
      <Button variant="contained" color="primary">
      Hello World
    </Button>
    <CodePenCard height={data.height} width={data.width} title={data.titles} src={data.penUrl}/>
    <TextSummary title={summaryData.title} summary={summaryData.summary}/>
  
    </div>
  );
}

export default App;
