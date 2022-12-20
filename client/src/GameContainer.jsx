import React from 'react'
import Games from "./Games";
import Search from './Search';

function GameContainer({ products, search, handleSearch, inCart, addToCart, removeFromCart}) {
    const eachProduct = products.map((product) => (
        <Games addToCart={addToCart} removeFromCart={removeFromCart} inCart={inCart} product={product} key={product.id}/>
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