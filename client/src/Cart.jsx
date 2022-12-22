import React from 'react'

function Cart({ currentCart }) {
  const showCartProducts = currentCart.products?.map((item) => {
      return (
        <div class="ui cards">
        <div class="card">
          <div class="content">
            <p>{item.name}</p>
            <p>{item.img_url}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
          </div>
        </div>
      </div>
      )
  })


  return (
    <>
    <br></br>
    <br></br>
    <h2>Cart Items</h2>
    <div>{showCartProducts}</div>
    </>
  )
}

export default Cart