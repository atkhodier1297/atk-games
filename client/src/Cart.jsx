import React, {useEffect} from 'react'

function Cart({ currentCart, setCurrentCart }) {

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

  useEffect(() => {
    fetch("/current-cart")
    .then(r => r.json())
    .then(cart => setCurrentCart(cart))
  }, [])

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