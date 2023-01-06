import React from 'react'
import { useNavigate } from 'react-router-dom'

function DeleteWarning({currentUser}) {

  const navigate = useNavigate()

  function deleteAccount(){
    fetch(`/users/${currentUser.id}`, {
      method : "DELETE",
    })
  }

  function deactivateLogOut(){
    deleteAccount()
    sessionStorage.clear()
    navigate("/")
  }
  return (
    <>
    <br></br>
    <h1 id="fonts" className="ui centered header ui inverted segment">Deactivate {currentUser.name}'s Account</h1>
    <br></br>
    <div className='ui inverted segment'>
    <h3 id="fonts" className='ui centered header'>Warning you are about to delete your ATK Games account. 
    There are no ways to recover your account, please make sure
    you understand that there is no account recovery process and all your accounts information including 
    username, email, and password will be gone. If you choose to purchase games from us again you will have to create a new account. 
    Upon deletion you will be routed back to our home page. We hope you choose ATK Games again, 
    press the delete button down below to confirm account deletion.
   </h3>
   </div>
   <br></br>
   <button onClick={deactivateLogOut} id="fonts" className='ui fluid large red submit button'>Deactivate Account</button>
    </>
  )
}

export default DeleteWarning