import React from 'react'
import { useNavigate } from 'react-router-dom'

function AddButton() {

  const navigate = useNavigate()

  function navAddProd() {
    navigate("/add-product")
  }
  
  return (
    <>
    <a onClick={navAddProd} className="item">Add Game</a>
    </>
  )
}

export default AddButton