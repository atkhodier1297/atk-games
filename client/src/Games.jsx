import React from 'react'

function Games({ product }) {

  const { name, description, price, img_url, rating, category } = product

  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <div class="ui card">
  <div class="image">
    <img alt='game' src={img_url}/>
  </div>
  <div class="content">
    <p class="header">{name}</p>
    <div class="meta">
      <span class="category">{category}</span>
      <p>
      <i class="star icon"></i>
      {rating}/5
    </p>
    </div>
    <div class="description">
      {description}
    </div>
  </div>
  <div class="extra content">
    <p>
      <i class="dollar sign icon"></i>
      {price}.00
    </p>
  </div>
  <p class="ui orange button">Add to Cart</p>
  <p class="ui purple button">Add to My List</p>
</div>
    </>
  )
}

export default Games