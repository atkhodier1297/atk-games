import React from "react";

function CategoryFilter({ price, onPriceChange, rating, onRatingChange, category, onCategoryChange }) {
  return (
    <>
    <div className="filter-background">
    <div className="filter-cat">
      <select
      className="ui dropdown"
        name="filter-cat"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">Filter by Console</option>
        <option value="PS5 Game">PS5 Games</option>
        <option value="Xbox Game">Xbox Games</option>
        <option value="Switch Game">Switch Games</option>
      </select>
    </div>
    <br></br>
     <div className="filter-rating">
     <select
     className="ui dropdown"
       name="filter-rating"
       value={rating}
       onChange={(e) => onRatingChange(e.target.value)}
     >
       <option value="All">Filter by Star Rating</option>
       <option value="1">1 ⭐️</option>
       <option value="2">2 ⭐️</option>
       <option value="3">3 ⭐️</option>
       <option value="4">4 ⭐️</option>
       <option value="5">5 ⭐️</option>
     </select>
   </div>
   <br></br>
   <div className="filter-price">
     <select
     className="ui dropdown"
       name="filter-price"
       value={price}
       onChange={(e) => onPriceChange(e.target.value)}
     >
       <option value="All">Filter by Price</option>
       <option value="10">$ 10.00</option>
       <option value="20">$ 20.00</option>
       <option value="30">$ 30.00</option>
       <option value="40">$ 40.00</option>
       <option value="50">$ 50.00</option>
       <option value="60">$ 60.00</option>
       <option value="70">$ 70.00</option>
     </select>
   </div>
   </div>
   </>
  );
}
export default CategoryFilter