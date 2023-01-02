import React from 'react'

function Review({currentUser, review}) {

  const {user, description, rating, user_id} = review

  function deleteReview(){
    fetch("/reviews", {
      method : "DELETE",
    })
  }

  const deleteButton = currentUser.id === user_id ? <button onClick={deleteReview} id="fonts" className="ui small blue button">Delete</button> : null

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