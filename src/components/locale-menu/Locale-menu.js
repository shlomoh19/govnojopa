import React from 'react'
import './Locale-menu.scss'

const LocaleMenu = ({ openLocaleMenu, setLocale }) => {
  return (
    <>
      {/* <div className={openLocaleMenu ? "locale-overlay locale-overlay-active" : "locale-overlay"} /> */}
      <div className={openLocaleMenu ? "locale-menu" : "locale-menu locale-menu-close"}>
        <span onClick={() => setLocale('en')} className="locale-menu-item">English</span>
        <span onClick={() => setLocale('de')} className="locale-menu-item">Deutsche</span>
        <span onClick={() => setLocale('fr')} className="locale-menu-item">Français</span>
        <span onClick={() => setLocale('es')} className="locale-menu-item">Español</span>
        <span onClick={() => setLocale('ru')} className="locale-menu-item">Русский</span>
        <span onClick={() => setLocale('arabic')} className="locale-menu-item">عربي</span>
      </div>
    </>
  );
};

export default LocaleMenu;