import React, { useState, useEffect } from 'react';
import { custReviews } from './customer-reviews.js';

function mergeReviewImage(images) {
  const productCategory = new URLSearchParams(window.location.search).get('category');
  const customerReviews = custReviews.find(review => review.category === productCategory);

  console.log(productCategory);

  if (customerReviews) {
    return customerReviews.reviews
      .map((review, index) => (
        {
          id: images[index].id,
          name: images[index].author,
          image: images[index],
          reviews: review
        }
      ));
  }
  return [];
}

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(async () => {
    const data = await fetch('https://picsum.photos/v2/list');
    const jsonData = await data.json();
    setReviews(mergeReviewImage(jsonData));
  }, []);

  if (reviews.length === 0) {
    return 'No Customer reviews for the product';
  }

  return reviews.map((review) => {
    return (
      <div className="review-container" key={review.id}>
        <img src={review.image.download_url} width="50" height="50" alt={review.name} />
        <b>{review.name}</b>
        <p>{review.reviews}</p>
      </div>
    )
  })
}
