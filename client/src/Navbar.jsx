import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import SignupButton from './SignupButton'
import LoginButton from './LoginButton'

function Navbar() {

    const navigate = useNavigate()

    const [showLogin, setShowLogin] = useState(true)
    const [showLogout, setShowLogout] = useState(false)
    const [showSignup, setShowSignup] = useState(true)

    const currentUser = sessionStorage.getItem("user_id")

    useEffect(() => {
      if (currentUser) {
        setShowLogin(false)
        setShowLogout(true)
        setShowSignup(false)
      }
      else {
        setShowLogin(true)
        setShowLogout(false)
        setShowSignup(true)
      } 
    },[currentUser])

    function navHome() {
        navigate("/")
      }

    function navGames() {
      navigate("/products")
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
      {showLogin ? <LoginButton/> : null}
      {showSignup ? <SignupButton/> : null}
      {showLogout ? <LogoutButton/> : null}
    </div>
  </div>
</div>
  )
}

export default Navbar
