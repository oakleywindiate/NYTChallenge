import React from 'react'
import { useEffect, useState } from 'react'
import Article from './Article'
import Details from './Details'

export default function ArticleContainer({ articles }) {
    const [allArticles, setAllArticles] = useState([])
    const [details, setDetails] = useState([])
    const [articleTitle, setArticleTitle] = useState("")

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

useEffect(() => {
    setAllArticles(articles)
  }, [])


const findArticle = (title) => {
    const findArticle = articles.filter(article => article.title === title)
   setDetails(findArticle)
}

    const singularArticle = articles.map((article) => {
        return (
            <div>
                <Article
                abstract={article.abstract}
                byline={article.byline}
                created_date={article.created_date}
                title={article.title}
                section={article.section}
                subsection={article.subsection}
                multimediaCaption={article.multimedia[0].caption}
                multimediaCopyright={article.multimedia[0].copyright}
                multimediaUrl={article.multimedia[1].url}
                />
                <button onClick={() => {
                    setArticleTitle(article.title)
                    findArticle(article.title)
                }}>DETAILS</button>
            </div>
        )
      })

  return (
    <section>
        <div>{singularArticle}</div>
    </section>    
  )
}
