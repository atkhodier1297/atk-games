import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Games({ product, currentCart, setCurrentCart }) {

  const {id, name, description, price, img_url, rating, category} = product
  const navigate = useNavigate()

  //const cartButton = inCart.includes(products)

  useEffect(() => {
    fetch("/current-cart")
    .then(r => r.json())
    .then(cart => setCurrentCart(cart))
  }, [])

  function addToCart(){
    if (sessionStorage.getItem("user_id")) {
      fetch("/add-to-cart" , {
        method : "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({product_id:id})
      })
      .then(r => r.json())
      .then(addedProduct => setCurrentCart({...currentCart, cart_product: [...currentCart.cart_products, addedProduct]}))
    }
    else {
      navigate("/login")
    }
  }

    function removeFromCart(){
      fetch("/remove-from-cart" , {
        method : "DELETE",
      })
    }

    console.log(currentCart)

  return (
    <>
    <br></br>
    <div class="ui card">
  <div class="image">
    <img alt='game' src={img_url}/>
  </div>
  <div class="content">
    <p class="header">{name}</p>
    <div class="meta">
      <span class="category">{category}</span>
      <p>
      <i class="star icon"></i>
      {rating}/5
    </p>
    </div>
    <div class="description">
      {description}
    </div>
  </div>
  <div class="extra content">
    <p>
      <i class="dollar sign icon"></i>
      {price}.00
    </p>
  </div>
  <p onClick={() => addToCart(product)} class="ui orange button">Add to Cart</p>
  <p onClick={() => removeFromCart(product)} class="ui purple button">Remove Cart</p>
  {/* {cartButton ? <p onClick={() => removeFromCart(product)} class="ui orange button">Remove Cart</p> : 
  <p onClick={() => addToCart(product)} class="ui orange button">Add to Cart</p>
  }  */}
</div>
    </>
  )
}

export default Games