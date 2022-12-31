import React, {useState, useEffect} from 'react'
import Games from "./Games";
import Search from './Search';
import { Card } from 'semantic-ui-react'


function GameContainer({ currentUser, currentUserId, handleEditForm, handleEditProduct, 
  selectedProduct, setSelectedProduct,
  removeProduct, products, search, 
  handleSearch, inCart, currentCart, setCurrentCart}) {


  function handleDelete(id) {
    fetch(`products/${id}`, {
      method: "DELETE",
    }).then(() => removeProduct(id));
  }

    const eachProduct = products.map((product) => (
      <Games currentUser={currentUser} currentUserId={currentUserId} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}
      handleEditForm={handleEditForm} handleEditProduct={handleEditProduct} 
      handleDelete={handleDelete} currentCart={currentCart} 
      setCurrentCart={setCurrentCart} 
      inCart={inCart} product={product} key={product.id}/>
    ))

  return (
    <>
    <h2>Welcome {currentUser.name}</h2>
    <Search search={search} handleSearch={handleSearch}/>
    <br></br>
    <Card.Group>{eachProduct}</Card.Group>
    
    </>
  )
}

export default GameContainer