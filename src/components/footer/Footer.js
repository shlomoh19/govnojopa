import React from 'react'
import { NavLink } from 'react-router-dom'
import {useTranslation} from "react-i18next";
import './Footer.scss'

const Footer = () => {
    const {t} = useTranslation()
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer-item">
                    <NavLink to="/befree/follow" className="footer-link">{t('befree')}</NavLink>
                    <NavLink to="/" className="footer-link">{t('team')}</NavLink>
                    <NavLink to="/contacts" className="footer-link">{t('befree')}</NavLink>
                </div>
                <div className="footer-item">
                    <NavLink to="/befree/casting" className="footer-link">{t('casting')}</NavLink>
                    <NavLink to="/befree/donate" className="footer-link">{t('donate')}</NavLink>
                    <NavLink to="/befree/follow" className="footer-link">{t('follow')}</NavLink>
                </div>
                <div className="footer__item-top">
                    <NavLink to="/befree/join" className="footer-link-top">{t('joinTheTeam')}</NavLink>
                </div>
                <div className="footer-logo">
                    <p>
                        {`<<..${t('befree.phrase')}..>>`}
                    </p>
                    <div className="logo">L.</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
