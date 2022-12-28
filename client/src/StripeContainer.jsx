// import React, { useEffect, useState } from "react"
// import { Elements } from "@stripe/react-stripe-js"
// import { loadStripe } from "@stripe/stripe-js"
// import PaymentForm from "./PaymentForm"

// const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY
// const stripeTestPromise = loadStripe(PUBLIC_KEY)

// function StripeContainer({ name, address, email, totalPrice }) {
// 	console.log(parseInt(totalPrice))
// 	const [clientSecret, setClientSecret] = useState("")
// 	useEffect(() => {
// 		fetch("/payment", {
// 			method: "POST",
// 			headers: { "Content-Type": "application/json" },
// 			body: JSON.stringify({
// 				amount: parseInt(`${totalPrice}00`),
// 				currency: "usd",
// 				name,
// 				email,
// 				address,
// 			}),
// 		})
// 			.then((res) => res.json())
// 			.then((data) => setClientSecret(data.clientSecret))
// 	}, [])

// 	const appearance = {
// 		theme: "stripe",
// 	}
// 	const options = {
// 		clientSecret,
// 		appearance,
// 	}
// 	return (
// 			<div className="App">
// 				{clientSecret && (
// 					<Elements options={options} stripe={stripeTestPromise}>
// 						<PaymentForm />
// 					</Elements>
// 				)}
// 			</div>
// 	)
// }

// export default StripeContainer