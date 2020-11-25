import React from 'react'
import './Button.scss'

const Button = ({ title, onClick, disabled = false }) =>
    <button
        disabled={disabled}
        className={disabled ? "button button-disable" : "button"}
        onClick={e => onClick(e)}
    >{title}</button>

export default Button