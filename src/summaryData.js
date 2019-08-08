import { yieldExpression } from "@babel/types";

const summaryData = {data:[
    {
      id: 1,
      title: "Elle Front-end Component Library",
      summary: "Written in vanilla JS, HTML, and SCSS this library utilizes Hugo Giraudel's 7-1 Sass architecture. I contributed the buttons, cards, scrollspy, and long search editor.",
      demo:'https://strtw.github.io/md-hackathon-team-1/',
      repository:'https://github.com/strtw/md-hackathon-team-1', 
      tags:['JavaScript','CSS','SCSS','HTML','UI']
    },
    {
      id: 2,
      title: "Mock-up Conversion",
      summary: "Demonstrates ability to take static design files and convert to code",
      demo:'http://btmbtm.github.io/MD-Encyclopedia-Profiles/',
      tags:['UI','HTML','CSS','Mock-up']
    },
    {
      id: 3,
      title: "Drag & Drop Puzzle",
      summary: "HTML5 jigsaw puzzle that utilizes the HTML Drag and Drop API. Puzzle includes timer, multiple difficulty levels, and completion animation",
      demo:'http://stuwoodpuzzle.surge.sh/',
      repository:'https://github.com/strtw/puzzle',
      tags:['UI','HTML','CSS','Mock-up','Game','Drag and Drop']
    },
    {
      id: 4,
      title: "Search Bar Query Editor",
      summary: "Component allows user to expand and edit search query once it grows beyond the bounds of its input box",
      demo:'https://evolution-ui.github.io/evolution-ui/#site-section-evolution-21',
      repository:'https://github.com/strtw/evolution-ui/tree/master/source/components/evolution/search-with-long-edit',
      tags:['UI','HTML','SCSS','JavaScript','UI Component','Open Source']
    },
    {
      id: 5,
      title: "Minimalist Image Carousel",
      summary: "Component utilizes CSS transitions to smoothly hide an image and expose another",
      demo:'https://evolution-ui.github.io/evolution-ui/#site-section-evolution-15',
      repository:'https://github.com/strtw/evolution-ui/tree/master/source/components/evolution/minimalist-carousel-two',
      tags:['UI','HTML','SCSS','JavaScript','UI Component','Open Source','Transitions']
    },
    {
      id: 6,
      title: "Free Music Archive Albums",
      summary: "Since coding this the Free Music Archive revoked API access to its service so the demo is broken. Project was created to fetch album data and display albums to the page using indexedDB for storage, Handlebars.js for templating, and XMLHttpRequest API for AJAX",
      repository:'https://github.com/strtw/music_catalog',
      tags:['API','AJAX','Templating','JavaScript','indexedDB']
    },
    {
      id: 7,
      title: "Responsive React Dashboard",
      summary: "An exercise in creating responsive layouts in React with scalable component styling. Utilizes Flexbox & Chart.js",
      demo:'http://dashboardm.surge.sh/',
      repository:'https://github.com/strtw/dashboard',
      tags:['Data Viz','React','Responsive'],
      embed:'<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTp_DVyPAzO0Y6e9qGpYBlQxZc8hktadwY2_5D9hCH14IOyekXlb9y-gma5fohTv_1X7nBiBM0oJPX1/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>',
      presentation:'https://docs.google.com/presentation/d/e/2PACX-1vTp_DVyPAzO0Y6e9qGpYBlQxZc8hktadwY2_5D9hCH14IOyekXlb9y-gma5fohTv_1X7nBiBM0oJPX1/pub?start=false&loop=false&delayms=3000'
    },
    {
      id: 8,
      title: "JavaScript Notes",
      summary: "A collection of notes I compiled while learning JS. Includes topics like closures, callbacks, IIFEs, scope etc.",
      repository:'https://github.com/strtw/JavaScript-Study-Guides',
      tags:['JavaScript','OOP','Closures', 'callbacks','events']
    },
    {
      id: 9,
      title: "This site",
      summary: "Written in React, uses Elasticlunr.js for search",
      repository:'https://bitbucket.org/strtw/portpholio/src/master/',
      tags:['React']
    },
    {
      id: 10,
      title: "Basic Drag & Drop",
      summary: "Simple CodePen example",
      demo:'https://codepen.io/stw/pen/pYLYZZ',
      tags:['Drag and drop']
    },
    {
      id: 11,
      title: "Stateless React Random Fact Generator - no JSX",
      summary: "Exercise in using React.createElement",
      demo:'https://codepen.io/stw/pen/PKrWQg',
      tags:['React','JSX','Functional Component']
    },
    {
      id: 12,
      title: "Partial Static Page Updates",
      summary: "Exercise in using haschange event listener to make partial page updates",
      demo:'https://codepen.io/stw/pen/dWzZBL',
      tags:['Events','Partial Page Updates', 'static']
    },
    {
      id: 13,
      title: "CSS Accordion",
      summary: "Exercise in creating an accordion that only uses HTML / CSS",
      demo:'https://codepen.io/stw/pen/GNoVqV',
      tags:['CSS','UI']
    }
  ]}

  //TODO add wordpress demo, lyricsFish?


  //const summaryData = '{"data":[{"id":1,"title":"This is the title","summary":"This is the cat","tags":["one","two","three"],"demo":"http://www.google.com","repository":"http://www.google.com"},{"id":2,"title":"This is the cat","summary":"This is the dog","tags":["one","two","three"],"demo":"http://www.google.com","repository":"http://www.google.com"}]}'

  export default summaryData;