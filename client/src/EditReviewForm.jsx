import React from 'react'

function EditReviewForm({id, selectedReview, handleEditReview, handleEditReviewForm}) {

  function handleInputChange(e) {
    handleEditReviewForm(e.target.name, e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(selectedReview),
    })
    .then(r => r.json())
    .then(handleEditReview)
  }

  function submitReload(e){
    handleSubmit(e)
    window.location.reload()
  }

  const {description, rating} = selectedReview

  return (
       <div>
    <div className="ui small form">
    <form className="edit_form" 
    onSubmit={submitReload}>
      <input
       className="edit-description"
       type="text"
       name="description"
       value={description}
       onChange={handleInputChange}
       placeholder="Edit Description"
     ></input>
      <input
        className="edit-rating"
        type="text"
        name="rating"
        value={rating}
        onChange={handleInputChange}
        placeholder="Edit Rating"
      ></input>
      <button className="ui purple button" type="submit">
        Edit
      </button>
    </form>
  </div>
  </div>
  )
}

export default EditReviewForm