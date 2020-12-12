import React from 'react'
import './Textarea.scss'

const Textarea = ({ changeHandler, name, placeholder, error, value }) => {
  return (
    <div className="field_wrapper">
      <label htmlFor={`input_${name}`} className={
        value?.trim().length <= 0
          ? "field_placeholder visible"
          : "field_placeholder"
      }
      >{placeholder}</label>
      <textarea
        autoCapitalize="sentences"
        spellCheck
        id={`input_${name}`}
        onChange={changeHandler}
        name={name}
        className={error ? "textarea input-error" : "textarea"}
        value={value}
      />
    </div>
  )
}


export default Textarea
