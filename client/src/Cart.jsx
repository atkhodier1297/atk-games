import React, {useState, useEffect} from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from './PaymentForm';

const PUBLIC_KEY = process.env.REACT_APP_STRIPE_KEY
const stripePromise = loadStripe(PUBLIC_KEY)

function Cart({ currentCart, setCurrentCart }) {

  const [clientSecret, setClientSecret] = useState("")

  function handleClick(){
    fetch('create-payment-intent', {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({amount: currentCart.total})
    })
    .then(resp => resp.json())
    .then((data) => {
      setClientSecret(data.clientSecret)
      // goToPaymentForm()
    })
  }


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

  const options = {
    clientSecret
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
        {currentCart.total}.00
    </h3>
    <a onClick={() => reloadAllCart()} className="ui red button">Empty Cart</a>
    <button onClick={handleClick} className="ui blue button">Checkout</button>
    <div>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <PaymentForm removeAllCart={removeAllCart}/>
          </Elements>
        )}
      </div>
    
    </>
  )
}

export default Cart