import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import GameContainer from "./GameContainer";

function App() {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("/products")
      .then((r) => r.json())
      .then((data) => setProducts(data));
  }, []);

  //console.log(products)

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const searchedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/products" element={<GameContainer products={searchedProducts} search={search} handleSearch={handleSearch}/>}/>
      </Routes>
    </>
  );
}

export default App;
