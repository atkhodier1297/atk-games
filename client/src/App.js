import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import GameContainer from "./GameContainer";
import Navbar from "./Navbar";
import Cart from "./Cart";
import AddProdForm from "./AddProdForm";
import Profile from "./Profile";

function App() {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [currentCart , setCurrentCart] = useState([])
  const [selectedProduct, setSelectedProduct] = useState("")

  const [currentUser, setCurrentUser] = useState({})
  const currentUserId = sessionStorage.getItem("user_id")

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
    fetch("/products")
      .then((r) => r.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("/current-cart")
    .then(r => r.json())
    .then(cart => setCurrentCart(cart))
  }, [])

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function postedProducts(addedProducts) {
    setProducts([...products, addedProducts])
  }

  function removeProduct(id) {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  }

  const searchedProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  function handleEditForm(name, value) {
    setSelectedProduct({
      ...selectedProduct, [name]: value,
    })
  }

  function handleEditProduct(updatedProduct) {
    const updatedProducts = products.map((product) =>
    product.id === updatedProduct.id ? updatedProduct : product
    )
    setSelectedProduct(updatedProduct)
    setProducts(updatedProducts)
  }

  return (
    <>
    <Navbar postedProducts={postedProducts}/>
      <Routes>
        <Route path="/add-product" element={<AddProdForm postedProduct={postedProducts}  />}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart currentCart={currentCart} setCurrentCart={setCurrentCart}/>}/>
        <Route path="/games" element={<GameContainer handleEditForm={handleEditForm} handleEditProduct={handleEditProduct}
        selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}
        removeProduct={removeProduct} currentCart={currentCart} setCurrentCart={setCurrentCart} 
        products={searchedProducts} search={search} handleSearch={handleSearch}/>}/>
      </Routes>
    </>
  );
}

export default App;
