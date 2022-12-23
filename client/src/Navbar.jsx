import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import SignupButton from './SignupButton'
import LoginButton from './LoginButton'
// import StripeCheckout from 'react-stripe-checkout';
import AddButton from './AddButton'

function Navbar() {
 
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

  //   const onToken = (token) => {

  //     const charge = {
  //         token: token.id
  //     };
  
  //     const config = {
  //         method: 'POST',
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({ charge: charge, price: price * 100 })
  //     };
  
  //     fetch(CHARGES_URL, config)
  //     .then(res => res.json())
  //     .then(console.log)
  // }

  return (
    <div className="ui medium top fixed hidden menu">
       <img
              className="adam-pic"
              src="https://cdn.discordapp.com/attachments/706587247197159578/1055649415123177532/Screenshot_2022-12-22_195335.png"
              height={50}
              alt=""
            />
  <div className="ui container">
    <a onClick={navHome} className="item">Home</a>
    <a onClick={navGames} className="item">Games</a>
    <a onClick={navCart} className="item">Cart</a>
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
