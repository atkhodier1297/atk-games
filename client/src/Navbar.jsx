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

    function navLogout() {
      navigate("/")
    }

    function navGames() {
      sessionStorage.clear()
      navigate("/games")
    }

  return (
    <div class="ui medium top fixed hidden menu">
       <img
              className="adam-pic"
              src="https://cdn.discordapp.com/attachments/706587247197159578/1052392924761047122/Screenshot_2022-12-13_201326.png"
              height={55}
              alt=""
            />
  <div class="ui container">
    <a onClick={navHome} class="active item">Home</a>
    <a onClick={navGames} class="item">Games</a>
    <a class="item">My List</a>
    <a class="item">Cart</a>
    <div class="right menu">
      <div class="item">
        <a onClick={navLogin} class="ui orange button">Log in</a>
      </div>
      <div class="item">
        <a onClick={navSignup} class="ui orange button">Sign Up</a>
      </div>
      <div class="item">
        <a onClick={navLogout} class="ui orange button">Log Out</a>
      </div>
    </div>
  </div>
</div>
  )
}

export default Navbar
