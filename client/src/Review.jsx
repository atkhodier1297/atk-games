import React from 'react'

function Review({review}) {

    const {description, rating} = review

  return (
    <>
      <div className="reviews">
      <div>{description}</div>
      <div>
      <i className="star icon"></i>
        {rating}</div>
      </div>
    </>
  )
}

export default Review