import React from 'react'
import './Input.scss'

const Input = ({ changeHandler, name, placeholder, error }) => {
  return (
    <div className="field_wrapper">
      <input
        onChange={changeHandler}
        className={error?.length > 0 ? "input input-error" : "input"}
        name={name}
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}


export default Input
