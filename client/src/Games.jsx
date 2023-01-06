import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ReviewContainer from './ReviewContainer'
import EditProdForm from './EditProdForm'
import AddReviewForm from './AddReviewForm'

function Games({ selectedReview, handleEditReview, handleEditReviewForm, removeReview, postedReviews, currentUser, currentUserId, handleEditForm, handleEditProduct, 
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
    fetch(`/remove-from-cart/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      fetch("/current-cart")
      .then(r => r.json())
      .then(cart => setCurrentCart(cart))
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
    <div id="fonts" className="ui card">
  <div className="image">
    <img className='game-image' alt='game' src={img_url}/>
  </div>
  <div className="content">
    <p className="header">
      {name}
      </p>
    <div className="header">
      <span className="category">{category}
      <br></br>
      <i className="dollar sign icon">{price}.00</i>
      </span>
      <p>
      <i className="star icon"></i>
      {rating}/5 from ATK GAMES
    </p>
    <p className="header">
      {description}
      </p>
    </div>
  </div>

  {currentUserId ? <button id="fonts" onClick={() => addToCart(product)} className="ui red button">Add to Cart</button> : null }
  {currentUserId ? <button id="fonts" onClick={() => removeFromCart(id)} className="ui blue button">Remove from Cart</button> : null }
  {currentUserId ? <button id="fonts" className="ui orange button" onClick={() => handleReviewClick()}>Add Review</button> : null }
  {currentUser.admin ? <button id="fonts" className="ui red button" onClick={() => handleDelete(id)}>Delete</button> : null }
  {currentUser.admin ? <button id="fonts" className="ui blue button" onClick={() => handleClick()}>Update</button> : null }
  {showForm ? <EditProdForm selectedProduct={selectedProduct} handleEditForm={handleEditForm} 
  handleEditProduct={handleEditProduct}/> : null }
  {showReview ? <AddReviewForm currentUserId={currentUserId} id={id} postedReviews={postedReviews}/> : null }
  <div className='ui inverted segment'>
  <ReviewContainer selectedReview={selectedReview} handleEditReview={handleEditReview} handleEditReviewForm={handleEditReviewForm} removeReview={removeReview} currentUser={currentUser} displayedReviews={displayedReviews}/>
  </div>
</div>


    </>
  )
}

export default Games