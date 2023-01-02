import React, {useState} from 'react'

function AddReviewForm({currentUserId, id, postedReviews}) {
    const [formData, setFormData] = useState({
        description: "",
        rating: "",
      });
    
      function handleChange(e) {
        console.log(e.target.value)
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      }
    
      function handleSubmit() {
        const addedReview = {
          description: formData.description,
          rating: formData.rating,
          product_id: id,
          user_id: currentUserId
        }
    
        fetch("/add-reviews/:id", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addedReview),
        })
          .then((r) => r.json())
          .then((data) => postedReviews(data));
      }
    
      return (
        <>
        <div className="ui small form">
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="description"
              type="text"
              name="description"
              placeholder="Add Review Description"
              value={formData.description}
              onChange={handleChange}
            ></input>
             <input
              className="rating"
              type="text"
              name="rating"
              placeholder="Add Review Rating"
              value={formData.rating}
              onChange={handleChange}
            ></input>
            <br></br>
            <br></br>
             <button onClick={() => console.log("I was clicked")} className="ui blue button" type="submit">
              Post Review
            </button>
          </form>
          </div>
        </>
      )
    }

export default AddReviewForm