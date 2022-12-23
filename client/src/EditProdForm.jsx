import React from 'react'

function EditProdForm({handleEditForm, handleEditDestination, selectedProduct}) {

    function handleInputChange(e) {
        handleEditForm(e.target.name, e.target.value)
      }
    
      function handleSubmit(e) {
        e.preventDefault()
        fetch(`/products/${selectedProduct.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(selectedProduct),
        })
        .then(r => r.json())
        .then(handleEditDestination)
    }
    
    const {name, price, rating, description, img_url, category} = selectedProduct

  return (
    <div>
    <div className="edit_destination">
    <form className="edit_form" 
    onSubmit={handleSubmit}
    >
      <input
        className="edit-name"
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        placeholder="Edit Name"
      ></input>
      <input
        className="edit-price"
        type="text"
        name="price"
        value={price}
        onChange={handleInputChange}
        placeholder="Edit Price"
      ></input>
      <input
        className="edit-rating"
        type="text"
        name="rating"
        value={rating}
        onChange={handleInputChange}
        placeholder="Edit Rating"
      ></input>
       <input
        className="edit-description"
        type="text"
        name="description"
        value={description}
        onChange={handleInputChange}
        placeholder="Edit Description"
      ></input>
      <input
        className="edit-img_url"
        type="text"
        name="img_url"
        value={img_url}
        onChange={handleInputChange}
        placeholder="Edit Image"
      ></input>
        <input
        className="edit-category"
        type="text"
        name="category"
        value={category}
        onChange={handleInputChange}
        placeholder="Edit Category"
      ></input>
      <button className="edit_destination_button" type="submit">
        Update
      </button>
    </form>
  </div>
  </div>
  )
}

export default EditProdForm