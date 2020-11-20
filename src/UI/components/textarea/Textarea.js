import React from 'react'
import './Textarea.scss'

const Textarea = ({ changeHandler, name, placeholder }) =>
  <textarea
    onChange={changeHandler}
    name={name}
    className="textarea"
    placeholder={placeholder}
  />

export default Textarea
