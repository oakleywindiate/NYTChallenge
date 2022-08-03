import React from 'react'

export default function Details({ details }) {
  return (
    <section>      
    <div>{details.abstract}</div>
    <div>{details.byline}</div> 
    <div>{details.created_date}</div>
    <div>{details.title}</div>
    <div>{details.section}</div>
    <div>{details.subsection}</div>
    <div>{details.multimediaCaption}</div>
    <div>{details.multimediaCopyright}</div>
    <img className="article-image" src={details.multimediaUrl} />
</section>
  )
}
