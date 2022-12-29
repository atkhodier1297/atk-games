import React, {useState, useEffect} from 'react'
import EditProfileForm from './EditProfileForm'

function Profile() {

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

  return (
    <>
    <div className='ui large form'>
    <h2>User Profile</h2>
    <h3>username: {currentUser.name}</h3>
    <h3>e-mail address: {currentUser.email}</h3>
    <h3>Update your profile information down below.</h3>
    { currentUserId ? <EditProfileForm/> : null }
    </div>
    </>
  )
}

export default Profile