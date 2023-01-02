import React from 'react'

function Review({currentUser, review}) {

  const {user, description, rating, user_id} = review

  // function showDelete(){
  //   if (currentUserId === user_id) {
  //     setShowReviewDelete(!showReviewDelete)
  //   }
  // }

  const deleteButton = currentUser.id === user_id ? <button id="fonts" className="ui blue button">Delete</button> : null

  return (
    <>
      <div className="reviews">
      <div>{user?.name}</div>
      <div>{description}</div>
      <div>
      <i className="star icon"></i>
        {rating}</div>
        {deleteButton}
        {/* {showReviewDelete ? <button id="fonts" className="ui blue button">Delete</button> : null } */}
      </div>
    </>
  )
}

export default Review