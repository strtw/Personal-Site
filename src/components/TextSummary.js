import React, {Component} from 'react'

function TextSummary(props){
  
        console.log(props)
        const tags = props.tags.map(tag=> {
            return(
                <span>{tag}</span>
            )
        })
        return(
            <div className="project" style={{display:props.display}}>
                <h2 className='project_title'>{props.title}</h2>
                <p className='project_summary'>{props.summary}</p>
                <div className='project_links'>
                    <a className='project_github' href={props.repository}>Repo</a>
                    <a className='project_demo' href={props.demo}>Demo</a>
                </div>
                <div className='project_tags'>
                    {tags}
                </div>
            </div>
        )
    }
   



export default TextSummary;