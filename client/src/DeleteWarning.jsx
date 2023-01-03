import React from 'react'

function DeleteWarning({currentUser}) {

  function deleteAccount(){
    fetch(`/users/${currentUser.id}`, {
      method : "DELETE",
    })
  }

  return (
    <>
    <h1 id="fonts" className='header-title'>Deactivate Account</h1>
    <div className='ui inverted segment'>
    <h2 id="fonts" className='ui centered header'>Warning you are about to delete your ATK Games account. 
    There are no ways to recover your account, please make sure
    you understand that there is no account recovery process and all your accounts information including 
    username, email, and password will be gone. If you choose to purchase games from us again you will have to create a new account. 
    Upon deletion you will be routed back to our home page. We hope you choose ATK Games again, 
    press the delete button down below to confirm account deletion.
   </h2>
   </div>
   <button onClick={deleteAccount} id="fonts" className='ui red button'>Deactive Account</button>
    </>
  )
}

export default DeleteWarning