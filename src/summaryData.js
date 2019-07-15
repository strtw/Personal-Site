import { yieldExpression } from "@babel/types";

const summaryData = {data:[
    {
      id: 1,
      title: "This is the title",
      summary: "This is the cat",
      tags:[1,2,3],
      demo:'http://www.google.com',
      repository:'http://www.google.com', 
      tags:['one','two','three'],
      display:true
    },
    {
      id: 2,
      title: "This is the cat",
      summary: "This is the dog",
      tags:[1,2,3],
      demo:'http://www.google.com',
      repository:'http://www.google.com',
      tags:['one','two','three'],
      display:true
    }
  ]}

  //const summaryData = '{"data":[{"id":1,"title":"This is the title","summary":"This is the cat","tags":["one","two","three"],"demo":"http://www.google.com","repository":"http://www.google.com"},{"id":2,"title":"This is the cat","summary":"This is the dog","tags":["one","two","three"],"demo":"http://www.google.com","repository":"http://www.google.com"}]}'

  export default summaryData;