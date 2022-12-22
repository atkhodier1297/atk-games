import React, {useState, useEffect} from 'react'
import Review from './Review';

function ReviewContainer() {

    const [displayedReviews, setDisplayedReviews] = useState([])

    useEffect(() => {
        fetch("/product-reviews")
          .then((r) => r.json())
          .then((data) => setDisplayedReviews(data));
      }, []);

      console.log(displayedReviews)

  return (
    <ul>
        {displayedReviews.map((review) => (
            <Review
            key={review.id}
            review={review}
            />
        ))}
    </ul>
  )
}

export default ReviewContainer