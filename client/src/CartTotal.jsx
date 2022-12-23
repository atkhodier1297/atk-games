import React from 'react'

function CartTotal({currentCart}) {
    // currentCart.total = currentCart.products?.price.forEach(
    //     price => currentCart.total += price
    // )
    
  return (
    <div>
        Cart Total:
        <i className="dollar sign icon"></i>
        {currentCart.total}.00</div>
  )
}

export default CartTotal