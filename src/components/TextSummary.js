import React from 'react'

function TextSummary(props){
    console.log(props)
    return(
       
        <div class="project">
        <h2 class='project_title'>{props.title}</h2>
        <p class='project_summary'>{props.summary}</p>
        </div>
    )
}


export default TextSummary;