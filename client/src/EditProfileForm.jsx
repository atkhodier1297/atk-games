import React, {useState, useEffect} from 'react'

function EditProfileForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [currentUser, setCurrentUser] = useState({})
  const currentUserId = sessionStorage.getItem("user_id")

  useEffect(() => {
    if (currentUserId) {
      fetch(`/users/${currentUserId}`)
      .then(r => r.json())
      .then(user => {
        setCurrentUser(user)
      })
    }
  },[currentUserId])

  function handleChange(e) {
    console.log(e.target.value)
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit() {
    const updatedUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    }

    fetch(`/users/${currentUserId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((r) => r.json())
      .then((data) => currentUser(data));
  }

  return (
    <>
    <div className="ui large form">
      <form className="form ui inverted segment" onSubmit={handleSubmit}>
        <input
          className="name"
          type="text"
          name="name"
          placeholder="Update Name"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <br></br>
        <br></br>
        <input
          className="email"
          type="text"
          name="email"
          placeholder="Update Email"
          value={formData.email}
          onChange={handleChange}
        ></input>
           <br></br>
        <br></br>
         <input
          className="password"
          type="text"
          name="password"
          placeholder="Update Password"
          value={formData.password}
          onChange={handleChange}
        ></input>
        <br></br>
        <br></br>
          <button className="ui red button" type="submit">
          Update
        </button>
      </form>
      </div>
      </>
  )
}

export default EditProfileForm