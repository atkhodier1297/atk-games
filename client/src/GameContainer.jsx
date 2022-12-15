import React from 'react'
import Games from "./Games";

function GameContainer({ products }) {
    const eachProduct = products.map((product) => (
        <Games product={product} key={product.id}/>
    ))
  return (
    <div>{eachProduct}</div>
  )
}

export default GameContainer