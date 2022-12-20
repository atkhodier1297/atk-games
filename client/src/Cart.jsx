import React from 'react'


function Cart({currentCart}) {
    const displayProducts = currentCart.map((product) => {
        return (
            product.name
        )
    })
    

  return (
    <>
    <br></br>
    <br></br>
    <h2>Cart Items</h2>
    <h3>{displayProducts}</h3>
    </>
  )
}

export default Cart