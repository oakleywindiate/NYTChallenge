import React from 'react'

export default function Details({ abstract, byline, created_date, title, section, subsection, 
    multimediaCaption, multimediaCopyright, multimediaUrl, url, uri, item_type, updated_date, published_date, 
    material_type_facet, kicker, des_facet, per_facet, multimedia, short_url }) {

const eachName = per_facet.filter(name => {
    return (
        <div>{name}</div>
    )
})

  return (
    <section className="details-comp-section">     
        <div className="details-information">
          <div className="header-details">
            <div className="title">{title}</div>
            <img className="details-image" src={multimediaUrl} /> 
          </div>
          <div>
            <div> > Abstract: {abstract}</div>
            <div> > Byline: {byline}</div> 
            <div> > Created Date: {created_date}</div>
            <div> > Section: {section}</div>
            <div> > Subsection: {subsection}</div>
            <div> > Multimedia Caption: {multimediaCaption}</div>
            <div> > Multimedia Copyright: {multimediaCopyright}</div>
            <div> > url: {url}</div>
            <div> > uri: {uri}</div>
            <div> > Item Type: {item_type}</div>
            <div> > Updated Date: {updated_date}</div>
            <div> > Published Date: {published_date}</div>
            <div> > Material Type Facet: {material_type_facet[0]}</div>
            <div> > Kicker: {kicker}</div>
            <div> > Des Facet: {des_facet}</div>
            <div> > Per Facet: {new Intl.ListFormat('en', { style: 'narrow', type: 'unit' }).format(eachName)}</div>
            <div> > Multimedia Caption: {multimedia[0].caption}</div>
            <div> > Short url: {short_url}</div>
          </div>
        </div> 
    </section>
  )
}
