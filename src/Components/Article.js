import React from 'react'
import '../App.css'

export default function Article({ abstract, byline, created_date, title, multimediaCaption, multimediaUrl }) {
    
return (
    <section className="article-inner-section">  
      <div className="article-left">
        <img className="article-image" src={multimediaUrl} alt={multimediaCaption}/>
        <div className="multimedia-caption">{multimediaCaption}</div>
      </div>   
      <div className="article-right"> 
        <div className="title">{title}</div>
        <div className="abstract">{abstract}</div>
        <div className="by-line">{byline}</div> 
        <div className="created-date">{created_date}</div>
      </div>  
    </section>
  )
}
