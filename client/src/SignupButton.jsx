import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignupButton() {

    const navigate = useNavigate()

    function navSignup() {
        navigate("/signup")
    }

  return (
    <div className="item">
        <a onClick={navSignup} class="ui black button">Sign Up</a>
      </div>
  )
}

export default SignupButton