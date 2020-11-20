import React from 'react'
import './Input.scss'

const Input = ({ changeHandler, name, placeholder }) =>
  <input
    onChange={changeHandler}
    className="input"
    name={name}
    type="text"
    placeholder={placeholder}
  />

export default Input
