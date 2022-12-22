import React from 'react'

function Review({review}) {

    const {description, rating} = review

  return (
    <div className='review-section'>
        <span>{description}</span>
        <span>{rating}/5⭐️</span>

    </div>
  )
}

export default Review