import React, { useState, useEffect } from "react"
import { PayPalButtons } from "../components/paypal"

export default function Support({ buttonText }) {
  const [showSupport, setShowSupport] = useState(false)
  const [amount, setAmount] = useState(0)
  const [supported, setSupported] = useState(false)

  const support = () => {
    return showSupport ? quantity() : supportButton()
  }

  const supportButton = () => {
    return (
      <button id="support" onClick={() => setShowSupport(true)}>
        {buttonText}
      </button>
    )
  }

  const quantity = () => {
    return (
      <form id="appreciationForm" onSubmit={loadPayPal}>
        Amount of appreciation:{" "}
        <input
          type="number"
          name="quantity"
          onChange={e => setAmount(e.target.value)}
        />
        <button type="submit">PayPal</button>
      </form>
    )
  }

  const loadPayPal = e => {
    e.preventDefault()
    let form = document.getElementById("appreciationForm")
    form.remove()
    PayPalButtons(amount, setSupported)
  }

  return (
    <div>
      <div>{support()}</div>
      {supported ? null : (
        <div className="container" id="paypal-button-container"></div>
      )}
      {supported ? (
        <div>
          <p>
            Thank you for your support.{" "}
            <svg
              className="thanks"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 28 28"
            >
              <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
            </svg>
          </p>
        </div>
      ) : null}
    </div>
  )
}
