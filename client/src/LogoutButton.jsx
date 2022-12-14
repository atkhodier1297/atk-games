import React from 'react'
import { useNavigate } from 'react-router-dom'

function LogoutButton() {

    const navigate = useNavigate()

    function navLogout() {
        sessionStorage.clear()
        navigate("/")
      }

  return (
    <div class="item">
    <a onClick={navLogout} class="ui orange button">Log Out</a>
  </div>
  )
}

export default LogoutButton