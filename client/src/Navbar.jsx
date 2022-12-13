import React from 'react'
import { useNavigate } from 'react-router-dom'



function Navbar() {

    const navigate = useNavigate()

    function navHome() {
        navigate("/")
      }

      function navLogin() {
        navigate("/login")
    }

    function navSignup() {
        navigate("/signup")
    }

  return (
    <div class="ui large top fixed hidden menu">
  <div class="ui container">
    <a onClick={navHome} class="active item">Home</a>
    <a class="item">Games</a>
    <a class="item">My List</a>
    <a class="item">Cart</a>
    <div class="right menu">
      <div class="item">
        <a onClick={navLogin} class="ui button">Log in</a>
      </div>
      <div class="item">
        <a onClick={navSignup} class="ui primary button">Sign Up</a>
      </div>
    </div>
  </div>
</div>
  )
}

export default Navbar
