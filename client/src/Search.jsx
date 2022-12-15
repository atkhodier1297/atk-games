import React from 'react'

function Search({search, handleSearch}) {
  return (
    <div class="ui search">
  <div class="ui icon input">
    <input value={search} onChange={handleSearch} class="prompt" type="text" placeholder="Search Games..."/>
    <i onClick={handleSearch} class="search icon"></i>
  </div>
</div>
  )
}

export default Search