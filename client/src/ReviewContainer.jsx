import React from 'react'
import Review from './Review';

function ReviewContainer({displayedReviews}) {
  const eachReview = displayedReviews.map((review) => (
    <Review review={review} key={review.id}/>
  ))
  return (
    <ul>
      {eachReview}
    </ul>
  )
}

export default ReviewContainer