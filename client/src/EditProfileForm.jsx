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
    <div className="products-form">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="name"
          type="text"
          name="name"
          placeholder="Update Name"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <input
          className="email"
          type="text"
          name="email"
          placeholder="Update Email"
          value={formData.email}
          onChange={handleChange}
        ></input>
         <input
          className="password"
          type="text"
          name="password"
          placeholder="Update Password"
          value={formData.password}
          onChange={handleChange}
        ></input>
          <button className="ui blue button" type="submit">
          Submit
        </button>
      </form>
      </div>
      </>
  )
}

export default EditProfileForm