import React from 'react'

function Search({search, handleSearch}) {
  return (
    <div className="ui large form">
  <div className="ui form"
  >
    <input value={search} onChange={handleSearch} className="prompt" type="text" placeholder="Search Games..."/>
  </div>
</div>
  )
}

export default Search