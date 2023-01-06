import React from 'react'

function PaymentComplete({currentUser}) {
  return (
    <>
    <br></br>
    <h2 className='ui inverted segment ui centered header'>Thank you {currentUser.name} for your payment! We hope you choose ATK Games again!</h2>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <img alt="logo" src="https://cdn.discordapp.com/attachments/706587247197159578/1055648320078491678/Screenshot_2022-12-22_194757.png" 
    className="ui gigantic centered image"/>
    </>
  )
}

export default PaymentComplete