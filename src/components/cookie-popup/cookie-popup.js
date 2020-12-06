import React from 'react'
import './cookie-popup.scss'

const CookiePopup = ({ setCookiePopup }) => {
    return (
        <div className="cookiePop">
            <p>We are using cookies to provide      statistics that help us give you the best
            experience of our site, by continuing to use the  site without changing settings,
            you are agreeing  to our use of cookies.
                <a href="https://automattic.com/cookies/" target="_blank" rel="noopener">Cookie Policy</a>
            </p>
            <button onClick={setCookiePopup} className="cookie-btn">OK</button>
        </div>
    )
}

export default CookiePopup
