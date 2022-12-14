import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignupButton() {

    const navigate = useNavigate()

    function navSignup() {
        navigate("/signup")
    }

  return (
    <div class="item">
        <a onClick={navSignup} class="ui orange button">Sign Up</a>
      </div>
  )
}

export default SignupButton