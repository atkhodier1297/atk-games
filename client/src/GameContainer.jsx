import React from 'react'
import Games from "./Games";
import Search from './Search';

function GameContainer({ products, search, handleSearch }) {
    const eachProduct = products.map((product) => (
        <Games product={product} key={product.id}/>
    ))
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Search search={search} handleSearch={handleSearch}/>
    <div>{eachProduct}</div>
    </>
  )
}

export default GameContainer