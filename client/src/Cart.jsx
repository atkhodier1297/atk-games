import React, {useEffect} from 'react'
import CartTotal from './CartTotal'

function Cart({ currentCart, setCurrentCart }) {

  function removeFromCart(){
    fetch("/remove-from-cart" , {
      method : "DELETE",
    })
  }

  function reloadDelete(){
    removeFromCart()
    window.location.reload()
  }

  const showCartProducts = currentCart.products?.map((item) => {
      return (
        <>
        <div className="ui cards">
        <div className="card">
          <div className="content">
            <img className="right floated mini ui image" src={item.img_url}/>
            <div className="header">
              {item.name}
            </div>
            <div className="meta">
              {item.category}
            </div>
            <div className="description">
            <i className="dollar sign icon"></i>
              {item.price}.00
            </div>
            <div className='trash-mouse'>
            <i onClick={() => reloadDelete()} className="trash icon"></i>
            </div>
          </div>
        </div>
      </div>
      </>
      )
  })

  useEffect(() => {
    fetch("/current-cart")
    .then(r => r.json())
    .then(cart => setCurrentCart(cart))
  }, [])

  return (
    <>
    <h2>Cart Items</h2>
    <div>{showCartProducts}</div>
    <CartTotal currentCart={currentCart}/>
    </>
  )
}

export default Cart