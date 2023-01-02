import React from 'react'
import Review from './Review';

function ReviewContainer({currentUser, displayedReviews}) {
  const eachReview = displayedReviews.map((review) => (
    <Review currentUser={currentUser} review={review} key={review.id}/>
  ))
  
  return (
    <ul>
      {eachReview}
    </ul>
  )
}

export default ReviewContainer