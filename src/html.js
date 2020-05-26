import React from "react"
import PropTypes from "prop-types"

let elasticLunr = require(`!raw-loader!./elasticlunr.js`); 

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta property="og:title" content="Stuart Wood - Front-end Developer"/>
        <meta property="og:site_name" content="Stuart Wood - Front-end Developer"/>
        <meta property="og:url" content="https://www.stu-wood.com"/>
        <meta property="og:description" content="San Diego, CA based front-end JavaScript engineer. Analytics | Data Viz | User Interface Development | Application Development"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://www.stu-wood.com/images/preview-image.png"/> 
        <meta property="twitter:image" content="https://www.stu-wood.com/images/preview-image.png"/> 
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
          
          <script
          dangerouslySetInnerHTML={{
           __html: elasticLunr,
          }}/>
          <link rel="shortcut icon" href="https://www.stu-wood.com/favicon.ico?v=1"/>
          <script id="parsely-cfg" src="//cdn.parsely.com/keys/stu-wood.com/p.js"></script> 
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
