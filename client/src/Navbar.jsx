import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import SignupButton from './SignupButton'
import LoginButton from './LoginButton'
import AddButton from './AddButton'

function Navbar({currentCart}) {
 
    const navigate = useNavigate()
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

    function navHome() {
        navigate("/")
      }

    function navCart() {
      navigate("/cart")
    }

    function navGames() {
      navigate("/games")
    }

    function navProfile() {
      navigate("/profile")
    }

  return (
    <div className="ui inverted segment">
  <div className="ui inverted secondary menu">
  <img
              className="banner"
              src="https://cdn.discordapp.com/attachments/706587247197159578/1055649415123177532/Screenshot_2022-12-22_195335.png"
              height={50}
              alt=""
            />
    <a id="fonts" onClick={navHome} className="item">Home</a>
    <a id="fonts" onClick={navGames} className="item">Games</a>
    { currentUserId ? <a id="fonts" onClick={navProfile} className="item">Profile</a> : null }
    { currentUserId ? <a id="fonts" onClick={navCart} className="item">Cart ({currentCart.products?.length})</a> : null }
    {/* <a className="item">My List</a> */}
    {currentUser.admin ? <AddButton/> : null}
    {/* <a> <StripeCheckout token={onToken} stripeKey={process.env.REACT_APP_STRIPE_KEY}/></a> */}
    <div className="right menu">
      {currentUserId ? null : <LoginButton/>}
      {currentUserId ? null : <SignupButton/>}
      {currentUserId ? <LogoutButton setCurrentUser={setCurrentUser}/> : null}
    </div>
  </div>
</div>
  )
}

export default Navbar
