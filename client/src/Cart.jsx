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
      body: JSON.stringify({amount: finalPrice})
    })
    .then(resp => resp.json())
    .then((data) => {
      setClientSecret(data.clientSecret)
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

    const tax = currentCart.total * .10
    const finalPrice = currentCart.total + tax
  

  const showCartProducts = currentCart.products?.map((item) => {
      return (
        <>
        <div className="ui cards">
        <div className="card">
          <div className="content">
            <img className="right floated small ui image" src={item.img_url}/>
            <div className="header">
              {item.name}
            </div>
            <br></br>
            <div className="header">
              {item.category}
              <br></br>
              <i className="dollar sign icon">{item.price}.00</i>
            </div>
            <div className='delete-item'>
            <button onClick={() => reloadDelete()} className="ui tiny red button">Remove</button>
            </div>
          </div>
        </div>
      </div>
      </>
      )
  })

  return (
    <>
    <br></br>
    <div className="ui centered header ui inverted segment">
    <h1 id="fonts">Cart</h1>
    </div>
    <br></br>
    <div className='ui inverted segment'>
    <h2 id="fonts">There are {currentCart.products?.length} items in your cart.</h2>
    </div>
    <br></br>
    <div>{showCartProducts}</div>
    <br></br>
    <button onClick={() => reloadAllCart()} className="ui red button">Empty Cart</button>
    <br></br>
    <div className='ui inverted segment'>
    <h3 id="fonts">
        Sub Total:
        <i className="dollar sign icon"></i>
        {currentCart.total}.00
    </h3>
    <h3 id="fonts">
        Sales Tax:
        <i className="dollar sign icon"></i>
        {tax.toFixed()}.00
    </h3>
    <h3 id="fonts">
        Final Total:
        <i className="dollar sign icon"></i>
        {finalPrice.toFixed()}.00
    </h3>
    </div>
    <br></br>
    <button onClick={handleClick} className="ui blue button">Checkout</button>
    <div className='ui inverted segment'>
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