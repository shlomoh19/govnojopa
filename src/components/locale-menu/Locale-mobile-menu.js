import React from 'react'
import './Locale-menu.scss'

const LocaleMobileMenu = ({ openLocaleMenu, setLocale }) => {
  return (
    <div className={openLocaleMenu ? "locale-mobile-menu" : "locale-mobile-menu locale-mobile-menu-close"}>
      <span onClick={() => setLocale('en')} className="locale-mobile-menu-item">English</span>
      <span onClick={() => setLocale('de')} className="locale-mobile-menu-item">Deutsche</span>
      <span onClick={() => setLocale('fr')} className="locale-mobile-menu-item">Français</span>
      <span onClick={() => setLocale('es')} className="locale-mobile-menu-item">Español</span>
      <span onClick={() => setLocale('ru')} className="locale-mobile-menu-item">Русский</span>
      <span onClick={() => setLocale('arabic')} className="locale-mobile-menu-item">عربي</span>
      <span onClick={() => setLocale('pt')} className="locale-menu-item">Português</span>
      <span onClick={() => setLocale('it')} className="locale-menu-item">Italiano</span>
    </div>
  )
}

export default LocaleMobileMenu
