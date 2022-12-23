import React from 'react'
import { useNavigate } from 'react-router-dom'


function LoginButton() {

    const navigate = useNavigate()

    function navLogin() {
        navigate("/login")
    }

  return (
    <div className="item">
        <a onClick={navLogin} class="ui black button">Log in</a>
    </div> 
  )
}

export default LoginButton