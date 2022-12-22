import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import GameContainer from "./GameContainer";
import Navbar from "./Navbar";
import Cart from "./Cart";

function App() {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [currentCart , setCurrentCart] = useState([])

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


  // function removeFromCart(removedGame){ 
  //   const updatedCart = currentCart.filter(game => game.id !== removedGame.id )
  //   setCurrentCart(updatedCart)
  // }

  const searchedProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart currentCart={currentCart}/>}/>
        <Route path="/games" element={<GameContainer currentCart={currentCart} setCurrentCart={setCurrentCart} 
        products={searchedProducts} search={search} handleSearch={handleSearch}/>}/>
      </Routes>
    </>
  );
}

export default App;
