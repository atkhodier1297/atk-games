import React from 'react'
import EditProfileForm from './EditProfileForm'
import { useNavigate } from 'react-router-dom'

function Profile({currentUser, currentUserId}) {

  const navigate = useNavigate()

  function navDelete() {
    navigate("/delete-account")
  }

  return (
    <>
    <br></br>
    <div className="header-title">
    <h1 id="fonts">{currentUser.name}'s Profile</h1>
    </div>
    <br></br>
    <div className='ui inverted segment'>
    <h3 className='ui centered header' id="fonts">username: {currentUser.name}</h3>
    <h3 className='ui centered header' id="fonts">e-mail address: {currentUser.email}</h3>
    <h3 className='ui centered header' id="fonts">Update your profile information down below.</h3>
    </div>
    <br></br>
    { currentUserId ? <EditProfileForm/> : null }
    <br></br>
    <br></br>
    { currentUserId ? <button id="fonts" className='ui fluid large blue submit button' onClick={navDelete}>Deactivate Page</button> : null }
    </>
  )
}

export default Profile