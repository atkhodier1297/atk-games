import React, {useEffect} from 'react'
// import CartTotal from './CartTotal'

function Cart({ currentCart, setCurrentCart }) {

  useEffect(() => {
    fetch("/current-cart")
    .then(r => r.json())
    .then(cart => setCurrentCart(cart))
  }, [])

  function removeFromCart(){
    fetch("/remove-from-cart" , {
      method : "DELETE",
    })
  }

  function removeAllCart(){
    fetch("/remove-all-cart" , {
      method : "DELETE",
    })
  }

  function reloadDelete(){
    removeFromCart()
    window.location.reload()
  }

  function reloadAllCart(){
    removeAllCart()
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

  return (
    <>
    <h2>Cart</h2>
    <h3>There are {currentCart.products?.length} items in your cart.</h3>
    <div>{showCartProducts}</div>
    <h3>
        Cart Total:
        <i className="dollar sign icon"></i>
        {currentCart.total}.00</h3>
        <a onClick={() => reloadAllCart()} className="ui red button">Empty Cart</a>
    {/* <CartTotal currentCart={currentCart}/> */}
    
    </>
  )
}

export default Cart