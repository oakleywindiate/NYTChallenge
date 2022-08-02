import React from 'react'
import Article from './Article'

export default function ArticleContainer({ articles }) {

// abstract
// byline
// created_date
// des_facet
// geo_facet
// item_type
// kicker
// material_type_facet
// multimedia
// org_facet
// per_facet
// published_date
// section
// short_url
// subsection
// title
// updated_date
// uri
// url



    const singularArticle = articles.map((article) => {
        return (
            <Article
            abstract={article.abstract}
            byline={article.byline}
            created_date={article.created_date}
            title={article.title}
            section={article.section}
            subsection={article.subsection}
            multimediaCaption={article.multimedia[0].caption}
            multimediaCopyright={article.multimedia[0].copyright}
            multimediaUrl={article.multimedia[0].url}
            />
        )
      })

  return (
    <div>{singularArticle}</div>
  )
}
