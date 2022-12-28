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
    <div>
    <h2>Profile</h2>
    <h3>{currentUser.name}</h3>
    <h3>{currentUser.email}</h3>
    { currentUserId ? <EditProfileForm/> : null }
    </div>
    </>
  )
}

export default Profile