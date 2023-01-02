import React from 'react'
import Games from "./Games";
import Search from './Search';
import { Card } from 'semantic-ui-react'


function GameContainer({ postedReviews, currentUser, currentUserId, handleEditForm, handleEditProduct, 
  selectedProduct, setSelectedProduct,
  removeProduct, products, search, 
  handleSearch, inCart, currentCart, setCurrentCart}) {


  function handleDelete(id) {
    fetch(`products/${id}`, {
      method: "DELETE",
    }).then(() => removeProduct(id));
  }

    const eachProduct = products.map((product) => (
      <Games postedReviews={postedReviews} currentUser={currentUser} currentUserId={currentUserId} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}
      handleEditForm={handleEditForm} handleEditProduct={handleEditProduct} 
      handleDelete={handleDelete} currentCart={currentCart} 
      setCurrentCart={setCurrentCart} 
      inCart={inCart} product={product} key={product.id}/>
    ))

  return (
    <>
     <div className="header-title">
    <h1 id="fonts">Hello {currentUser.name}</h1>
    </div>
    <br></br>
    <br></br>
    <Search search={search} handleSearch={handleSearch}/>
    <br></br>
    <br></br>
    <Card.Group>{eachProduct}</Card.Group>
    
    </>
  )
}

export default GameContainer