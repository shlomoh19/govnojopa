import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import './Mobile-menu.scss'
import {useTranslation} from "react-i18next";
import LocaleMobileMenu from '../locale-menu/Locale-mobile-menu';
import { setCookiesLocale } from '../../utils/cookies';

const MobileMenu = ({ mobileMenu, mobileMenuHandler }) => {
    const [localeMenuIsOpen, setLocaleMenuIsOpen] = useState(false)
    const {t, i18n} = useTranslation()

    const changeLanguage = language => {
        i18n.changeLanguage(language)
        setCookiesLocale(language)
    }
    
    return (
        <div className={mobileMenu ? "mobile-menu open-menu" : "mobile-menu close-menu"}>
            <NavLink onClick={mobileMenuHandler} exact to="/" activeClassName="mobile__menu-item" className="mobile__menu-item">
                {t('team')}
            </NavLink>
            <NavLink onClick={mobileMenuHandler} to="/befree/follow" activeClassName="mobile__menu-item" className="mobile__menu-item">
                {t('befree')}
            </NavLink>
            <NavLink onClick={mobileMenuHandler} to="/casting" activeClassName="mobile__menu-item" className="mobile__menu-item">
                {t('casting')}
            </NavLink>
            <NavLink onClick={mobileMenuHandler} to="/contacts" activeClassName="mobile__menu-item" className="mobile__menu-item">
                {t('contacts')}
            </NavLink>
            <div style={{ position: 'relative' }} >
                <div style={{marginBottom: '20px'}} onClick={() => setLocaleMenuIsOpen(!localeMenuIsOpen)}>
                    Language
                    <i style={localeMenuIsOpen ? { transform: 'rotate(180deg)' } : null} className="fas fa-angle-down icon-arr" />
                </div>
                <LocaleMobileMenu openLocaleMenu={localeMenuIsOpen} setLocale={changeLanguage}/>
            </div>
        </div>
    )
}

export default MobileMenu
