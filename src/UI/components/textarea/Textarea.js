import React from 'react'
import './Textarea.scss'

const Textarea = ({ changeHandler, name, placeholder, error }) =>
  <textarea
    onChange={changeHandler}
    name={name}
    className={error ? "textarea input-error" : "textarea"}
    placeholder={placeholder}
  />

export default Textarea
