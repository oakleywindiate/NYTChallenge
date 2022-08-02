import React from 'react'

export default function Article({ abstract, byline, created_date, title, section, subsection, multimediaCaption, multimediaCopyright, multimediaUrl }) {
  
        return (
    <section>      
        <div>{abstract}</div>
        <div>{byline}</div> 
        <div>{created_date}</div>
        <div>{title}</div>
        <div>{section}</div>
        <div>{subsection}</div>
        <div>{multimediaCaption}</div>
        <div>{multimediaCopyright}</div>
        <div>{multimediaUrl}</div>
    </section>
  )
}
