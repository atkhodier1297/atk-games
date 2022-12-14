import React, {useState} from 'react'
import Games from "./Games";
import Search from './Search';
import { Card } from 'semantic-ui-react'
import CategoryFilter from './CategoryFilter';


function GameContainer({ selectedReview, handleEditReview, handleEditReviewForm, removeReview, postedReviews, currentUser, currentUserId, handleEditForm, handleEditProduct, 
  selectedProduct, setSelectedProduct,
  removeProduct, products, search, 
  handleSearch, inCart, currentCart, setCurrentCart}) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");


  function handleDelete(id) {
    fetch(`products/${id}`, {
      method: "DELETE",
    }).then(() => removeProduct(id));
  }

  const filteredProducts = products

  .filter((product) => {
    if (selectedCategory === "All") return true;
    return product.category === selectedCategory
  })

  .filter((product) => {
    if (selectedRating === "All") return true;
    return product.rating === parseInt(selectedRating)
  })

    .filter((product) => {
    if (selectedPrice === "All") 
      return true;
    if (product.price === 10) 
      return product.price === parseInt(selectedPrice)
    if (product.price === 20) 
      return product.price === parseInt(selectedPrice)
    if (product.price === 30) 
      return product.price === parseInt(selectedPrice)
    if (product.price === 40) 
      return product.price === parseInt(selectedPrice)
    if (product.price === 50) 
      return product.price === parseInt(selectedPrice)
    if (product.price === 60) 
      return product.price === parseInt(selectedPrice)
    if (product.price === 70) 
      return product.price === parseInt(selectedPrice)
    })

  function handlePriceChange(price) {
    setSelectedPrice(price)
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleRatingChange(rating) {
    setSelectedRating(rating)
  }

    const eachProduct = filteredProducts.map((product) => (
      <Games selectedReview={selectedReview} handleEditReview={handleEditReview} handleEditReviewForm={handleEditReviewForm} removeReview={removeReview} postedReviews={postedReviews} currentUser={currentUser} currentUserId={currentUserId} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}
      handleEditForm={handleEditForm} handleEditProduct={handleEditProduct} 
      handleDelete={handleDelete} currentCart={currentCart} 
      setCurrentCart={setCurrentCart} 
      inCart={inCart} product={product} key={product.id}/>
    ))

  return (
    <>
    <br></br>
     { currentUserId ? <div className="ui centered header ui inverted segment"> 
    <h1 id="fonts">Hello {currentUser.name}</h1>
    </div> : <div className="ui centered header ui inverted segment"> 
    <h1 id="fonts">Log In or Sign Up to Purchase Games</h1>
    </div> }
    <br></br>
    <div className='ui centered header ui inverted segment'>
    <Search search={search} handleSearch={handleSearch}/> 
    <br></br>
    <CategoryFilter price={selectedPrice} onPriceChange={handlePriceChange}  rating={selectedRating} onRatingChange={handleRatingChange} category={selectedCategory} onCategoryChange={handleCategoryChange}/>
    </div>
    <br></br>
    <br></br>
    <Card.Group className='ui centered ui inverted segment'>{eachProduct}</Card.Group>
    
    </>
  )
}

export default GameContainer