import React from 'react'
import { useNavigate } from 'react-router-dom'

function LogoutButton({ setCurrentUser }) {

    const navigate = useNavigate()

    function navLogout() {
        setCurrentUser({})
        sessionStorage.clear()
        navigate("/")

      }

  return (
    <div className="item">
    <a onClick={navLogout} class="ui red button">Log Out</a>
  </div>
  )
}

export default LogoutButton