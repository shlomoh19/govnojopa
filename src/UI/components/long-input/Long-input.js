import React from 'react'
import './Long-input.scss'

const LongInput = ({ changeHandler, name, placeholder, error, value }) => {
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
        className={error ? "long-input input-error" : "long-input"}
        name={name}
        type="text"
        value={value}
      />
        <i className="far fa-question-circle tooltip" data-tooltip="Петуху петушиная жизнь"/>
    </div>
  )
}


export default LongInput