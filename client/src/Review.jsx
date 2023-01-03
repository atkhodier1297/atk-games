import React from 'react'

function Review({removeReview, currentUser, review}) {

  const {id, user, description, rating, user_id} = review

  function deleteReview(id){
    fetch(`/reviews/${id}`, {
      method : "DELETE",
    }).then(() => removeReview(id))
  }

  function reloadDeleteReview(){
    deleteReview(id)
    window.location.reload()
  }

  const deleteButton = currentUser.id === user_id ? <button onClick={reloadDeleteReview} id="fonts" className="ui small blue button">Delete</button> : null

  return (
    <>
      <div className="reviews">
      <div>{user?.name}</div>
      <div>{description}</div>
      <div>
      <i className="star icon"></i>
        {rating}
      </div>
        {deleteButton}
        {/* {showReviewDelete ? <button id="fonts" className="ui blue button">Delete</button> : null } */}
      </div>
    </>
  )
}

export default Review