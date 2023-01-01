import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ReviewContainer from './ReviewContainer'
import EditProdForm from './EditProdForm'
import AddReviewForm from './AddReviewForm'

function Games({ postedReviews, currentUser, currentUserId, handleEditForm, handleEditProduct, 
  selectedProduct, setSelectedProduct, handleDelete, 
  product, currentCart, setCurrentCart }) {

  const {id, name, description, price, img_url, rating, category} = product
  const [displayedReviews, setDisplayedReviews] = useState([])
  const [showForm, setShowForm] = useState(false);
  const [showReview, setShowReview] = useState(false)
  const navigate = useNavigate()

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

    function handleClick() {
      setSelectedProduct(product)
      setShowForm(!showForm)
    }

    function handleReviewClick() {
      setShowReview(!showReview)
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
  <button onClick={() => addToCart(product)} className="ui red button">Add to Cart</button>
  <button onClick={() => removeFromCart(product)} className="ui blue button">Remove from Cart</button>
  {currentUserId ? <button className="ui orange button" onClick={() => handleReviewClick()}>Add Review</button> : null }
  {currentUser.admin ? <button className="ui red button" onClick={() => handleDelete(id)}>Delete</button> : null }
  {currentUser.admin ? <button className="ui blue button" onClick={() => handleClick()}>Update</button> : null }
  {showForm ? <EditProdForm selectedProduct={selectedProduct} handleEditForm={handleEditForm} 
  handleEditProduct={handleEditProduct}/> : null }
  {showReview ? <AddReviewForm currentUserId={currentUserId} id={id} postedReviews={postedReviews}/> : null }
  <ReviewContainer displayedReviews={displayedReviews}/>
</div>
    </>
  )
}

export default Games