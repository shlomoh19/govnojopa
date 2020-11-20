import React from 'react'
import { NavLink } from "react-router-dom";
import LocaleMenu from '../locale-menu/Locale-menu';
import {useTranslation} from "react-i18next";
import {setCookiesLocale} from "../../utils/cookies";
import './Header.scss'

const Header = ({ mobileMenuHandler, mobileMenu, openLocaleMenu, setOpenLocaleMenu }) => {
    const {t, i18n} = useTranslation()

    const changeLanguage = language => {
        i18n.changeLanguage(language)
        setCookiesLocale(language)
    }
    return (
        <header className="header">
            <div className="header__logo-wrapper">L.</div>
            {/* DESCTOP MENU */}
            <div className="header__main">
                <NavLink exact to="/" activeClassName="header__item-active" className="header__item header__main-item">
                    {t('team')}
                </NavLink>
                <NavLink to="/befree/follow" activeClassName="header__item-active" className="header__item header__main-item">
                    {t('befree')}
                </NavLink>
                <NavLink to="/casting" activeClassName="header__item-active" className="header__item header__main-item">
                    {t('casting')}
                </NavLink>
                <NavLink to="/contacts" activeClassName="header__item-active" className="header__item header__main-item">
                    {t('contacts')}
                </NavLink>
            </div>
            <div style={{ position: 'relative' }} onClick={() => setOpenLocaleMenu(!openLocaleMenu)}>
                <div className="locale__label">
                    {t('locale')}
                <i style={openLocaleMenu ? { transform: 'rotate(180deg)' } : null} className="fas fa-angle-down icon-arr" />
                </div>
                <LocaleMenu setLocale={changeLanguage} openLocaleMenu={openLocaleMenu} />
            </div>

            {/* MOBILE MENU */}
            <div className="header__menu-icon" onClick={mobileMenuHandler}>
                <span className={mobileMenu ? 'menu-line menu-one menu-line-open-one' : 'menu-line menu-one'} />
                <span className={mobileMenu ? 'menu-line menu-two menu-line-open-two' : 'menu-line menu-two'} />
                <span className={mobileMenu ? 'menu-line menu-three menu-line-open-three' : 'menu-line menu-three'} />
            </div>
        </header>
    )
}

export default Header
