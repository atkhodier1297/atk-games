import React from 'react'
import { useState } from 'react'
import EditReviewForm from './EditReviewForm'

function Review({selectedReview, handleEditReview, handleEditReviewForm, removeReview, currentUser, review}) {

  const {id, user, description, rating, user_id} = review
  const [showUpdateReview, setShowUpdateReview] = useState(false)

  function updateReviewForm() {
    setShowUpdateReview(!showUpdateReview)
  }

  function deleteReview(id){
    fetch(`/reviews/${id}`, {
      method : "DELETE",
    }).then(() => removeReview(id))
  }

  function reloadDeleteReview() {
    deleteReview(id)
    window.location.reload()
  }

  const deleteButton = currentUser.id === user_id ? <button onClick={reloadDeleteReview} id="fonts" className="ui small blue button">Delete</button> : null
  const updateButton = currentUser.id === user_id ? <button onClick={updateReviewForm} id="fonts" className="ui small red button">Edit</button> : null
  
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
        {updateButton}
        {showUpdateReview ? <EditReviewForm id={id} selectedReview={selectedReview} handleEditReview={handleEditReview} handleEditReviewForm={handleEditReviewForm}/> : null}
      </div>
    </>
  )
}

export default Review