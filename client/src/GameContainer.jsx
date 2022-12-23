import React from 'react'
import Games from "./Games";
import Search from './Search';
import { Card } from 'semantic-ui-react'


function GameContainer({ handleEditForm, handleEditDestination, 
  selectedProduct, setSelectedProduct,
  removeProduct, products, search, 
  handleSearch, inCart, currentCart, setCurrentCart}) {

  function handleDelete(id) {
    fetch(`products/${id}`, {
      method: "DELETE",
    }).then(() => removeProduct(id));
  }

    const eachProduct = products.map((product) => (
      <Games selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}
      handleEditForm={handleEditForm} handleEditDestination={handleEditDestination} 
      handleDelete={handleDelete} currentCart={currentCart} 
      setCurrentCart={setCurrentCart} 
      inCart={inCart} product={product} key={product.id}/>
    ))

  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Search search={search} handleSearch={handleSearch}/>
    <br></br>
    <Card.Group>{eachProduct}</Card.Group>
    
    </>
  )
}

export default GameContainer