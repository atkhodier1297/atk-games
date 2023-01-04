import React from 'react'
import Review from './Review';

function ReviewContainer({selectedReview, handleEditReview, handleEditReviewForm, removeReview, currentUser, displayedReviews}) {
  const eachReview = displayedReviews.map((review) => (
    <Review selectedReview={selectedReview} handleEditReview={handleEditReview} handleEditReviewForm={handleEditReviewForm} removeReview={removeReview} currentUser={currentUser} review={review} key={review.id}/>
  ))
  
  return (
    <ul>
      {eachReview}
    </ul>
  )
}

export default ReviewContainer