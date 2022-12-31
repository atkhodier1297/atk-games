import React, { useState } from 'react'

function AddProdForm({ postedProducts }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    img_url: "",
    rating: "",
    category: "",
  });

  function handleChange(e) {
    console.log(e.target.value)
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit() {
    const addedProduct = {
      name: formData.name,
      description: formData.description,
      price: formData.price,
      img_url: formData.img_url,
      rating: formData.rating,
      category: formData.category,
    }

    fetch("/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedProduct),
    })
      .then((r) => r.json())
      .then((data) => postedProducts(data));
  }

  return (
    <>
    <h2>Add Products to our Inventory</h2>
    <div className="ui large form">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="name"
          type="text"
          name="name"
          placeholder="Add Product Name"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <input
          className="description"
          type="text"
          name="description"
          placeholder="Add Product Description"
          value={formData.description}
          onChange={handleChange}
        ></input>
         <input
          className="price"
          type="text"
          name="price"
          placeholder="Add Product Price"
          value={formData.price}
          onChange={handleChange}
        ></input>
         <input
          className="img_url"
          type="text"
          name="img_url"
          placeholder="Add Product Image"
          value={formData.img_url}
          onChange={handleChange}
        ></input>
         <input
          className="rating"
          type="text"
          name="rating"
          placeholder="Add Product Rating"
          value={formData.rating}
          onChange={handleChange}
        ></input>
         <input
          className="category"
          type="text"
          name="category"
          placeholder="Add Product Category"
          value={formData.category}
          onChange={handleChange}
        ></input>
         <button onClick={() => console.log("I was clicked")} className="ui blue button" type="submit">
          Add Product
        </button>
      </form>
      </div>
    </>
  )
}

export default AddProdForm