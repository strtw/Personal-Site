import React from 'react';

//todo figure out how to load iframe 
function CodePenCard(props){
    console.log(props);
    return(
        <div>
            <iframe height={`${props.height}`} style={{width:props.width}} scrolling="no" title={props.title} src={props.src} frameBorder="no" allowtransparency="true" allowFullScreen={true}>
            See the Pen <a href='https://codepen.io/stw/pen/KEoLaV/'>KEoLaV</a> by Stu
            (<a href='https://codepen.io/stw'>@stw</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
      </div>
    )
}


export default CodePenCard;