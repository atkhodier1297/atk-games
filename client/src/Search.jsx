import React from 'react'

function Search({search, handleSearch}) {
  return (
    <div className="ui search">
  <div className="ui icon input">
    <input value={search} onChange={handleSearch} className="prompt" type="text" placeholder="Search Games..."/>
    <i onClick={handleSearch} className="search icon"></i>
  </div>
</div>
  )
}

export default Search