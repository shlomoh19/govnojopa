import React from 'react'
import './Input.scss'

const Input = ({ changeHandler, name, placeholder, error, value }) => {
  return (
    <div className="field_wrapper">
      <label htmlFor={`input_${name}`} className={
        value?.trim().length <= 0
          ? "field_placeholder visible"
          : "field_placeholder"
      }
      >{placeholder}</label>
      <input
        id={`input_${name}`}
        onChange={changeHandler}
        className={error?.length > 0 ? "input input-error" : "input"}
        name={name}
        type="text"
        value={value}
      />
    </div>
  )
}


export default Input
