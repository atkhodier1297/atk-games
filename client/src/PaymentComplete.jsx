import React from 'react'

function PaymentComplete({currentUser}) {
  return (
    <>
    <h2 className='ui centered header'>Thank you {currentUser.name} for your payment! We hope you choose ATK Games again!</h2>
    <img alt="logo" src="https://cdn.discordapp.com/attachments/706587247197159578/1055648320078491678/Screenshot_2022-12-22_194757.png" 
    className="ui medium centered image"/>
    </>
  )
}

export default PaymentComplete