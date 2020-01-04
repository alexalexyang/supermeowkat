import React from "react"

export const PayPalScript = () => {
  const PAYPAL_CLIENT_ID = process.env.GATSBY_PAYPAL_CLIENT_ID
  console.log("PPCID:", PAYPAL_CLIENT_ID)

  const script = document.createElement("script")
  script.type = "text/javascript"
  script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}`
  script.async = true
  script.onerror = () => {
    throw new Error("Paypal SDK could not be loaded.")
  }
  //   script.onload = () => console.log("Connected to Paypal.")

  document.head.appendChild(script)
}

export const PayPalButtons = (price, setSupported) => {
  window.paypal
    .Buttons({
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                value: price,
              },
              //   payee: {
              //     email_address: "payee@gmail.com",
              //   },
            },
          ],
        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        console.log(order)
        setSupported(true)
      },
      onError: err => {
        console.log(err)
      },
    })
    .render("#paypal-button-container")
    .catch(err => console.log(err))
}
