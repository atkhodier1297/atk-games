import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ReviewContainer from './ReviewContainer'
import EditProdForm from './EditProdForm'

function Games({ handleEditForm, handleEditProduct, 
  selectedProduct, setSelectedProduct, handleDelete, 
  product, currentCart, setCurrentCart }) {

  const {id, name, description, price, img_url, rating, category} = product
  const [currentUser, setCurrentUser] = useState({})
  const currentUserId = sessionStorage.getItem("user_id")
  const [displayedReviews, setDisplayedReviews] = useState([])
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate()

  //const cartButton = inCart.includes(products)

  useEffect(() => {
    if (currentUserId) {
      fetch(`/users/${currentUserId}`)
      .then(r => r.json())
      .then(user => {
        setCurrentUser(user)
      })
    }
  },[currentUserId])

  useEffect(() => {
    fetch("/current-cart")
    .then(r => r.json())
    .then(cart => setCurrentCart(cart))
  }, [])

  useEffect(() => {
    fetch(`/product-reviews/${id}`)
      .then((r) => r.json())
      .then((data) => setDisplayedReviews(data));
  }, []);

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
      .then(addedProduct => setCurrentCart({...currentCart, products: [...currentCart.products, addedProduct]}))
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

    function handleClick() {
      setSelectedProduct(product)
      setShowForm(!showForm)
    }

  return (
    <>
    <div className="ui card">
  <div className="image">
    <img className='game-image' alt='game' src={img_url}/>
  </div>
  <div className="content">
    <p className="header">
      {name}
      </p>
    <div className="meta">
      <span className="category">{category}
      <i onClick={() => addToCart(product)} className="shopping cart icon"></i>
  <i onClick={() => removeFromCart(product)} className="trash icon"></i>
      </span>
      <p>
      <i className="star icon"></i>
      {rating}/5 from ATK GAMES
    </p>
    </div>
    <div className="description">
      {description}
    </div>
  </div>
  <div className="extra content">
    <p>
      <i className="dollar sign icon"></i>
      {price}.00
    </p>
  </div>
  {currentUser.admin ? <button className="ui red button" onClick={() => handleDelete(id)}>Delete</button> : null }
  {currentUser.admin ? <button className="ui blue button" onClick={() => handleClick()}>Update</button> : null }
  {/* {cartButton ? <p onClick={() => removeFromCart(product)} className="ui orange button">Remove Cart</p> : 
  <p onClick={() => addToCart(product)} className="ui orange button">Add to Cart</p>
  }   */}
  {showForm ? <EditProdForm selectedProduct={selectedProduct} handleEditForm={handleEditForm} 
  handleEditProduct={handleEditProduct}/> : null }
  <ReviewContainer displayedReviews={displayedReviews}/>
</div>
    </>
  )
}

export default Games