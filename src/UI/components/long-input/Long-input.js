import React from 'react'
import './Long-input.scss'

const LongInput = ({ changeHandler, name, placeholder }) =>
  <input
    onChange={changeHandler}
    className="long-input"
    name={name}
    type="text"
    placeholder={placeholder}
  />

export default LongInput