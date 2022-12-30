import React from 'react'

function Review({review}) {

    const {user, description, rating} = review

  return (
    <>
      <div className="reviews">
      <div>{user?.name}</div>
      <div>{description}</div>
      <div>
      <i className="star icon"></i>
        {rating}</div>
      </div>
    </>
  )
}

export default Review