import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate()

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userAdmin, setUserAdmin] = useState(false)
  const [errors, setErrors] = useState("")

  const currentUser = sessionStorage.getItem("user_id")

  useEffect(() => {
    if (currentUser) {
     navigate("/games")
    } 
  },[currentUser, navigate])

  function signupClick(e) {
    e.preventDefault()
    fetch('/signup', {
      method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: userEmail, password: userPassword, name: userName, admin: userAdmin })
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => window.sessionStorage.setItem("user_id", data.id))
                .then(() => navigate("/games"))
            }
            else {
              setErrors("Missing fields, you must have an email with proper formatting, username, and password!")

            }
        })
    }

  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className ="ui middle aligned center aligned grid">
  <div className ="column">
      <h1 id="fonts" className ="ui centered header ui inverted segment">
        Create your account
      </h1>
    <form className ="ui large form">
      <div className ="ui stacked inverted segment">
        <div className ="field">
          <div className ="ui left icon input">
            <i className ="envelope icon"></i>
            <input onChange={(e) => setUserEmail(e.target.value)} type="text" name="email" placeholder="E-mail address"/>
          </div>
        </div>
        <div className ="field">
          <div className ="ui left icon input">
            <i className ="user icon"></i>
            <input onChange={(e) => setUserName(e.target.value)} type="text" name="name" placeholder="Username"/>
          </div>
        </div>
        <div className ="field">
          <div className ="ui left icon input">
            <i className ="lock icon"></i>
            <input onChange={(e) => setUserPassword(e.target.value)} type="password" name="password" placeholder="Password"/>
          </div>
        </div>
        <div id="fonts"onClick={signupClick}
        className ="ui fluid large blue submit button">Create Account</div>
      </div>
    </form>
    <h3 className="ui inverted segment">{errors}</h3>
  </div>
</div>
</>
  
  )
}

export default Signup