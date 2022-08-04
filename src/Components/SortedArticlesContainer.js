import React from 'react'
import Article from './Article'
import Details from './Details'
import { useEffect, useState } from 'react'

export default function SortedArticlesContainer({ sortedArticles }) {
    const [allSortedArticles, setAllSortedArticles] = useState([])
    const [details, setDetails] = useState([])
    const [articleTitle, setArticleTitle] = useState("")


useEffect(() => {
    setAllSortedArticles(sortedArticles)
  }, [])

  const findArticle = (title) => {
    const findArticle = sortedArticles.filter(article => article.title === title)
   setDetails(findArticle)
}  


    const singularSortedArticle = sortedArticles.map((article, index) => {
        return (
            <div key={index}>
                <Article
                abstract={article.abstract}
                byline={article.byline}
                created_date={article.created_date}
                title={article.title}
                multimediaCaption={article.multimedia[0].caption}
                multimediaUrl={article.multimedia[1].url}
                />
                <button onClick={() => {
                    setArticleTitle(article.title)
                    findArticle(article.title)
                }}>DETAILS</button>
            </div>
        )
      })

      const detailsSortedArticle = details.map((article, index) => {
        return (
            <div key={index}>
                <Details
                abstract={article.abstract}
                byline={article.byline}
                created_date={article.created_date}
                title={article.title}
                section={article.section}
                subsection={article.subsection}
                multimediaCaption={article.multimedia[0].caption}
                multimediaCopyright={article.multimedia[0].copyright}
                multimediaUrl={article.multimedia[1].url}
                url={article.url}
                uri={article.uri}
                item_type={article.item_type}
                updated_date={article.updated_date}
                published_date={article.published_date}
                material_type_facet={article.material_type_facet}
                kicker={article.kicker}
                des_facet={article.des_facet}
                org_facet={article.org_facet}
                per_facet={article.per_facet}
                geo_facet={article.geo_facet}
                multimedia={article.multimedia}
                short_url={article.short_url}
                />
                <button onClick={() => {
                    setArticleTitle("")
                }}>BACK</button>
            </div>
        )
      })  

  return (
     <section>
        {!articleTitle && <div>{singularSortedArticle}</div>}
        {articleTitle && <div>{detailsSortedArticle}</div>}     
     </section>
  )
}
