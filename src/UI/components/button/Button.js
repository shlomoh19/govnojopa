import React from 'react'
import './Button.scss'

const Button = ({ title, onClick = () => {}, disabled = false }) => {
    return (
        <div className="field_wrapper">
            <button
                disabled={disabled}
                className={disabled ? "button button-disable" : "button"}
                onClick={e => onClick(e)}
                type="button"
            >{title}</button>
        </div>
    )
}

export default Button