import React from 'react'

function Home() {

  return (
    <>
    <br></br>
    <div className="header-title">
  <h1 id="fonts">Welcome to ATK Games</h1>
  <p id="fonts">We have games for every modern console and a large selection of retro games! </p>
</div>
<br></br>
    <div className="ui inverted segment">
    <div className="ui middle aligned stackable grid container">
      <div className="row">
        <div className="eight wide column">
          <h2 className="ui inverted header" id="fonts">Mission Statement</h2>
          <h3 id="fonts">Our mission is simple, provide customers with a fantastic user experience buying video games!</h3>
          <h2 className="ui  inverted header" id="fonts">Browse our Collection</h2>
          <h3 id="fonts">Add games you wish to purchase to your cart and checkout, its that easy! ATK Games partnered with Stripe for a safe and secure checkout experience.</h3>
          <h2 id="fonts" className="ui inverted header">About Us</h2>
          <h3 id="fonts">Our founder created this web app using the skills he learned from attending Flatiron School's software engineering program. </h3>
        </div>
        <div className="six wide right floated column">
          <img alt="logo" src="https://cdn.discordapp.com/attachments/706587247197159578/1055648320078491678/Screenshot_2022-12-22_194757.png" className="ui large rounded image"/>
        </div>
      </div>
      <div className="ui vertical stripe quote segment">
    <div className="ui equal width stackable internally celled grid">
      <div className="center aligned row">
        <div className="column ui inverted segment">
        <h3 id="fonts">"Way better than buying games from Best Buy or Amazon."</h3>
          <h3>
            <b id="fonts">Hideo Kojima</b> Elite Game Designer
          </h3>
        </div>
        <div className="column ui inverted segment">
          <h3 id="fonts">"Can't believe they had a copy of DOOM for the Nintendo 64!"</h3>
          <h3>
            <b id="fonts">Joe Biden</b> President of the United States 
          </h3>
        </div>
        <div className="column ui inverted segment">
          <h3 id="fonts">"Super easy to navigate, I love that there isin't a ton of ads!"</h3>
          <h3>
            <b id="fonts">Mr. Beast</b> Most Subscribed Youtuber 
          </h3>
        </div>
        <div className="column ui inverted segment">
          <h3 id="fonts">"I bought so many retro games from my childhood, amazing!"</h3>
          <h3>
            <b id="fonts">Eichiro Oda</b> Creator of One Piece 
          </h3>
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
    <br></br>
    <div className="ui inverted vertical footer segment">
    <div className="ui container">
      <div className="ui stackable inverted divided equal height stackable grid">
        <div className="three wide column">
          <h4 id="fonts" className="ui inverted header"> My Links</h4>
          <div className="ui inverted link list">
            <a id="fonts" href="https://github.com/atkhodier1297" className="item">Github</a>
            <a id="fonts" href="https://www.linkedin.com/in/adam-khodier/" className="item">Linked In</a>
            <a id="fonts" href="https://medium.com/@khodieradam1297" className="item">Medium Blog Posts</a>
            <a id="fonts" href="https://flatironschool.com/" className="item">Flatiron School</a>
          </div>
        </div>
        <div className="three wide column">
          <h4 id="fonts" className="ui inverted header">Resources</h4>
          <div className="ui inverted link list">
            <a id="fonts" href="https://semantic-ui.com/introduction/getting-started.html" className="item">Sematic UI</a>
            <a id="fonts" href="https://stripe.com/docs/" className="item">Stripe Docs</a>
            <a id="fonts" href="https://reactjs.org/docs/getting-started.html" className="item">React Docs</a>
            <a id="fonts" href="https://guides.rubyonrails.org/" className="item">Rails Docs</a>
          </div>
        </div>
        <div className="seven wide column">
          <h4 id="fonts" className="ui inverted header">About Me</h4>
          <p id="fonts">From Poly Sci to Full Stack Software Engineering. |JS| |React| |Ruby| |Rails|
          Graduated Cum Laude from Kean University with a BA in Political Science. 
          Recently became a Flatiron School Alumni, trying to become an impactful software engineer
          </p>
        </div>
        <img
              className="adam-pic"
              src="https://ca.slack-edge.com/T02MD9XTF-U040NP41CSZ-ef8b80c53d03-512"
              height={140}
              alt="adam"
            />      
      </div>
    </div>
  </div>
   </>
  )
}

export default Home