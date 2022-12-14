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
import PaymentComplete from "./PaymentComplete";
import DeleteWarning from "./DeleteWarning";

function App() {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [currentCart , setCurrentCart] = useState([])
  const [selectedProduct, setSelectedProduct] = useState("")
  const [reviews, setReviews] = useState("")
  const [selectedReview, setSelectedReview] = useState("")

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

  function postedReviews(addedReviews) {
    setReviews([...reviews, addedReviews])
  }


  function removeProduct(id) {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  }

  function removeReview(id) {
    const newReviews = reviews.filter((review) => review.id !== id)
    setReviews(newReviews)
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

  function handleEditReviewForm(name, value) {
    setSelectedReview({
      ...selectedReview, [name]: value,
    })
  }

  function handleEditReview(updatedReview) {
    const updatedReviews = reviews.map((review) =>
    review.id === updatedReview.id ? updatedReview : review
    )
    setSelectedReview(updatedReview)
    setReviews(updatedReviews)
  }

  

  return (
    <>
    <Navbar currentCart={currentCart} postedProducts={postedProducts}/>
      <Routes>
        <Route path="/add-product" element={<AddProdForm postedProduct={postedProducts}  />}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/delete-account" element={<DeleteWarning currentUser={currentUser}/>}/>
        <Route path="/payment-complete" element={<PaymentComplete currentUser={currentUser}/>}/>
        <Route path="/profile" element={<Profile currentUser={currentUser} currentUserId={currentUserId}/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart products={products} currentCart={currentCart} setCurrentCart={setCurrentCart}/>}/>
        <Route path="/games" element={<GameContainer selectedReview={selectedReview} handleEditReview={handleEditReview} handleEditReviewForm={handleEditReviewForm}
        postedReviews={postedReviews} currentUser={currentUser} currentUserId={currentUserId} 
        handleEditForm={handleEditForm} handleEditProduct={handleEditProduct}
        selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}
        removeProduct={removeProduct} currentCart={currentCart} setCurrentCart={setCurrentCart} 
        products={searchedProducts} search={search} handleSearch={handleSearch} removeReview={removeReview}/>}/>
      </Routes>
    </>
  );
}

export default App;
