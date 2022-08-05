import React from 'react'
import { useEffect, useState } from 'react'
import Details from './Details'
import Article from './Article'
import '../App.css'

export default function ArticleContainer({ articles }) {
    const [allArticles, setAllArticles] = useState([])
    const [details, setDetails] = useState([])
    const [articleTitle, setArticleTitle] = useState("")


useEffect(() => {
    setAllArticles(articles)
  }, [])


const findArticle = (title) => {
    const findArticle = articles.filter(article => article.title === title)
   setDetails(findArticle)
}

    const singularArticle = articles.map((article, index) => {
        return (
            <div className="article-container" key={index}>
                <div>
                    <Article
                    abstract={article.abstract}
                    byline={article.byline}
                    created_date={article.created_date}
                    title={article.title}
                    multimediaCaption={article.multimedia[0].caption}
                    multimediaUrl={article.multimedia[1].url}
                    />
                </div>
                <div className="details-div">    
                    <button className="nav-btn details" onClick={() => {
                        setArticleTitle(article.title)
                        findArticle(article.title)
                    }}>DETAILS</button>  
                </div>     
            </div>
        )
      })

      const detailsArticle = details.map((article, index) => {
        return (
            <div className="article-container" key={index}>
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
                <div className="back-div">
                    <button className="nav-btn back" onClick={() => {
                        setArticleTitle("")
                    }}>BACK</button>
                </div>
            </div>
        )
      })  

  return ( 
    <section className="article-section">
        {!articleTitle && <div className="singular-article">{singularArticle}</div>}
        {articleTitle && <div>{detailsArticle}</div>}
    </section>    
  )
}

