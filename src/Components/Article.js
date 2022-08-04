import React from 'react'

export default function Article({ abstract, byline, created_date, title, multimediaCaption, multimediaUrl }) {
    
return (
    <section>  
      <div>
        <img className="article-image" src={multimediaUrl} />
      </div>   
      <div> 
        <div>{abstract}</div>
        <div>{byline}</div> 
        <div>{created_date}</div>
        <div>{title}</div>
        <div>{multimediaCaption}</div>
      </div>  
    </section>
  )
}
