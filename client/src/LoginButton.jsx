import React from 'react'
import { useNavigate } from 'react-router-dom'


function LoginButton() {

    const navigate = useNavigate()

    function navLogin() {
        navigate("/login")
    }

  return (
    <div class="item">
        <a onClick={navLogin} class="ui orange button">Log in</a>
    </div> 
  )
}

export default LoginButton