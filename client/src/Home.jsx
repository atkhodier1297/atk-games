import React from 'react'

function Home() {

    // useEffect(() => {
    //   fetch("/current-cart")
    //   .then(r => r.json())
    //   .then(cart => setCurrentCart(cart))
    // }, [])

  return (
    <>
    <div className="ui vertical stripe segment">
    <div className="ui middle aligned stackable grid container">
      <div className="row">
        <div className="eight wide column">
          <h1 className="ui header">Welcome to ATK Games!</h1>
          <p>Our mission is to provide customers with a fantastic experice buying video games! We have physical games for every console imaginable, and provide free two day shipping so you can start playing as fast as possible!</p>
          <h2 className="ui header">Browse our Collection</h2>
          <p>Add games you wish to purchase to your cart and checkout, its that easy!</p>
          <h2 className="ui header">About Us</h2>
          <p>Our founder created this web app using the skills he learned from attending Flatiron School's software engineering program. </p>
          <div className="header">Adam Khodier</div>
          <div className="meta">Software Engineer/Gamer</div>
          <img
              className="adam-pic"
              src="https://ca.slack-edge.com/T02MD9XTF-U040NP41CSZ-ef8b80c53d03-512"
              height={75}
              alt="adam"
            />
        </div>
        <div className="six wide right floated column">
          <img alt="logo" src="https://cdn.discordapp.com/attachments/706587247197159578/1055648320078491678/Screenshot_2022-12-22_194757.png" className="ui large rounded image"/>
        </div>
      </div>
      <div className="ui vertical stripe quote segment">
    <div className="ui equal width stackable internally celled grid">
      <div className="center aligned row">
        <div className="column">
        <h3>"Way better than buying games from Best Buy or Amazon."</h3>
          <p>
            <b>Tom Cruise</b> Scientologist
          </p>
        </div>
        <div className="column">
          <h3>"Can't believe they had a copy of DOOM for the Nintendo 64!"</h3>
          <p>
            <b>Joe Biden</b> President of the United States 
          </p>
        </div>
        <div className="column">
          <h3>"Super easy to navigate, I love that there isin't a ton of ads!"</h3>
          <p>
            <b>Mr. Beast</b> Most Subscribed Youtuber 
          </p>
        </div>
        <div className="column">
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