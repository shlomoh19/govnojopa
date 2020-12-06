import React from 'react'
import './Long-input.scss'

const LongInput = ({ changeHandler, name, placeholder, error }) => {
  return (
    <div className="field_wrapper">
      <input
        onChange={changeHandler}
        className={error ? "long-input input-error" : "long-input"}
        name={name}
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}


export default LongInput