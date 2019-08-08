import React, {Component} from 'react'

function TextSummary(props){  
    let style = {
        display:props.display
    }
        const tags = props.tags.map((tag,index) => {
            return(
                <span style={{display:'none'}}key={index}> {tag} </span>
            )
        })
        return(
            <div className="project" style={{display:props.display}}>
                <h2 className='project_title'>{props.title}</h2>
                <p className='project_summary'>{props.summary}</p>
                <div className='project_links'>
                    <a className='project_presentation' style={{display: props.presentation ? 'inline-block':'none'}} href={props.presentation} target="_blank">Presentation</a>
                    <a className='project_github' style={{display: props.repository ? 'inline-block':'none'}} href={props.repository} target="_blank">Repo</a>
                    <a className='project_demo' style={{display: props.demo ? 'inline-block':'none'}} href={props.demo} target="_blank">Demo</a>
                </div>
                <div className='project_tags'>
                    {tags}
                </div>
            </div>
        )
    }
   



export default TextSummary;