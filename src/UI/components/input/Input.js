import React from 'react'
import './Input.scss'

const Input = ({ changeHandler, name, placeholder, error, value, tooltip }) => {

  const maxLengthProperty = propName => {
    switch (propName) {
      case 'email': {
        return 64
      }
      case 'name': {
        return 30
      }
      case 'surname': {
        return 30
      }
      default:
        return 255
    }
  }

  return (
    <div className="field_wrapper">
      <label htmlFor={`input_${name}`} className={
        value?.trim().length <= 0
          ? "field_placeholder visible"
          : "field_placeholder"
      }
      >
          {placeholder}
      </label>
      <input
        id={`input_${name}`}
        onChange={changeHandler}
        className={error?.length > 0 ? "input input-error" : "input"}
        name={name}
        type="text"
        value={value}
        autoComplete="off"
        maxLength={maxLengthProperty(name)}
      />
        {tooltip && <i className="far fa-question-circle tooltip" data-tooltip={tooltip}/>}
    </div>
  )
}


export default Input
