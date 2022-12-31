import React, {useState, useEffect} from 'react'
import EditProfileForm from './EditProfileForm'

function Profile({currentUser, currentUserId}) {

 

  return (
    <>
    <h2>Profile</h2>
    <h3>username: {currentUser.name}</h3>
    <h3>e-mail address: {currentUser.email}</h3>
    <h3>Update your profile information down below.</h3>
    { currentUserId ? <EditProfileForm/> : null }
    </>
  )
}

export default Profile