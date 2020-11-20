import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './Done.scss'

const DonePage = () => {
  return (
    <div className="done">
      <FontAwesomeIcon icon={faCheckCircle} className="done__icon" />
      <h1>GO TO THE YOUR MAIL AND CONFIRM THE ACTION!</h1>
      <h2>Have good day {"(:"}</h2>
    </div>
  )
}

export default DonePage
