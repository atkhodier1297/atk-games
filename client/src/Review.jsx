import React from 'react'

function Review({review}) {

    const {user_id, description, rating} = review

  return (
    <div class="ui cards">
  <div class="card">
    <div class="content">
      <p>{user_id}</p>
      <i class="star icon">{rating}/5</i>
      <div class="description">
        {description}
      </div>
    </div>
  </div>
</div>
  )
}

export default Review