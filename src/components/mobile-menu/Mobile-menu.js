import React from 'react'
import { translate } from 'react-polyglot'
import { NavLink } from "react-router-dom"
import './Mobile-menu.scss'
import {useTranslation} from "react-i18next";

const MobileMenu = ({ mobileMenu, mobileMenuHandler }) => {
    const {t, i18n} = useTranslation()
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
        </div>
    )
}

export default MobileMenu
