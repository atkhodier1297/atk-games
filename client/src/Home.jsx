import React from 'react'

function Home() {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    
    <div class="ui vertical stripe segment">
    <div class="ui middle aligned stackable grid container">
      <div class="row">
        <div class="eight wide column">
          <h1 class="ui header">Welcome to ATK Games!</h1>
          <p>Our mission is to provide customers with a fantastic experice buying video games! We have physical games for every console imaginable, and provide free two day shipping so you can start playing as fast as possible!</p>
          <h2 class="ui header">Browse our Collection</h2>
          <p>Add games you wish to purchase to your cart and checkout, its that easy! We also provide you with a section called "My List" after you created an account that allows you to add your favorites to a wishlist!</p>
          <h2 class="ui header">About Us</h2>
          <p>Our founder created this web applicaion using the skills he learned from attending Flatiron School's software engineering program. </p>
          <div class="header">Adam Khodier</div>
          <div class="meta">Software Engineer/Gamer</div>
          <img
              className="adam-pic"
              src="https://ca.slack-edge.com/T02MD9XTF-U040NP41CSZ-ef8b80c53d03-512"
              height={75}
              alt=""
            />
        </div>
        <div class="six wide right floated column">
          <img alt="" src="https://cdn.discordapp.com/attachments/706587247197159578/1052392924761047122/Screenshot_2022-12-13_201326.png" class="ui large rounded image"/>
        </div>
      </div>
      <div class="ui vertical stripe quote segment">
    <div class="ui equal width stackable internally celled grid">
      <div class="center aligned row">
        <div class="column">
        <h3>"Way better than buying games from Best Buy or Amazon."</h3>
          <p>
            <b>Tom Cruise</b> Leader of the Church of Scientoligy
          </p>
        </div>
        <div class="column">
          <h3>"I love adding games to the wish list, great feature!"</h3>
          <p>
            <b>Joe Biden</b> President of the United States 
          </p>
        </div>
        <div class="column">
          <h3>"Super easy to navigate, I love that there isin't a ton of ads!"</h3>
          <p>
            <b>Mr. Beast</b> Most Subscribed Youtuber 
          </p>
        </div>
        <div class="column">
          <h3>"I bought so many retro games from my childhood!"</h3>
          <p>
            <b>Eichiro Oda</b> Creator of One Piece 
          </p>
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
   </>
  )
}

export default Home