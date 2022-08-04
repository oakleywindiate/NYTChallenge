import React from 'react'
import { useEffect, useState } from 'react'

export default function SortBar({ sortArticles }) {

    const handleSelect = (e) => {
        let section = e.target.value
        sortArticles(section)
    }

  return (
    <div className="article-filter-section">
        <div>Sort by Section:</div>
            <select
                title="Filter By Section"
                className="section-level-dropdown"
                onChange={handleSelect}>
                <option value="none">None</option>
                <option value="arts">Arts</option>
                <option value="movies">Movies</option>
                <option value="books">Books</option>
                <option value="theater">Theater</option>
                <option value="podcasts">Podcasts</option>
            </select>
    </div>
  )
}
