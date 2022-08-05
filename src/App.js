import { useEffect, useState } from 'react'
import ArticleContainer from './Components/ArticleContainer'
import SortBar from './Components/SortBar'
import SortedArticlesContainer from './Components/SortedArticlesContainer'
import './App.css'

const App = () => {
  const [articles, setArticles] = useState([]);
  const [sortedArticles, setSortedArticles] = useState([])
  const [error, setError] = useState('');

  const getArticles = async () => {
    const url = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=uLwEDDqAip2mKBL3DNO1NMENW70vpyyu'
    setError('')

    try {
      const response = await fetch(url)
      const loadArticles = await response.json()
      setArticles(loadArticles.results)
    } catch (error) {
      setError("An error has occurred. Please try again.")
    }
  }

  useEffect(() => {
    getArticles()
    console.log(articles.section)
  }, [])

  const sortArticles = (section) => {
    if (section === "none") {
      setSortedArticles(null)
    }
      const filterArticles = articles.filter(article => article.section === section)
      setSortedArticles(filterArticles)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="top-stories">TOP STORIES</h1>
      </header>
      <main>
        <SortBar sortArticles={sortArticles}/>
        {!sortedArticles.length && <ArticleContainer articles={articles}/>}
        {sortedArticles && <SortedArticlesContainer sortedArticles={sortedArticles}/>}
        <div>{error}</div>
      </main>  
    </div>
  );
}

export default App;
