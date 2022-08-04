import React from 'react'
import { useEffect, useState } from 'react'

export default function SortBar({ sortArticles }) {

    const handleSelect = (e) => {
        let section = e.target.value
        sortArticles(section)
    }

  return (
    <div className="cat-filter-section">
        <div>Sort by Section:</div>
            <select
                title="Filter By Section"
                className="section-level-dropdown"
                onChange={handleSelect}>
                <option value="None">None</option>
                <option value="Arts">Arts</option>
                <option value="Movies">Movies</option>
                <option value="Books">Books</option>
                <option value="Theater">Theater</option>
                <option value="Podcasts">Podcasts</option>
            </select>
    </div>
  )
}
