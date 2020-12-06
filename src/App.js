import React, { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import Header from "./components/header/Header";
import { Route } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import MobileMenu from './components/mobile-menu/Mobile-menu';
import Contacts from './components/contacts/Contacts';
import Spinner from './components/spinner/Spinner';
import BefreeSkeleton from './components/be-free/be-free-skeleton';
import CastingSkeleton from './components/casting/CastingSkeleton';
import './App.scss';
import CookiePopup from './components/cookie-popup/cookie-popup';
import { getCookiesByName, setAgreeWithCookies } from './utils/cookies';



const BefreeLazy = lazy(() => import('./components/be-free/Be-free'))
const CastingPageLazy = lazy(() => import('./components/casting/Casting-page'))

function App() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [done, setDone] = useState(false)
    const [isShowCookiesPopup, setIsShowCookiesPopup] = useState(false)

    useEffect(() => {
        const isAgree = !!getCookiesByName('agreeWithCookies')
        if (!isAgree) {
            setIsShowCookiesPopup(true)
        } else {
            setIsShowCookiesPopup(false)
        }
    }, [isShowCookiesPopup])

    const mobileMenuHandler = useCallback(() => setMobileMenu(!mobileMenu), [mobileMenu])

    const menuActive = {
        opacity: "1",
        zIndex: '5'
    }

    const menuUnActive = {
        opacity: '0',
        zIndex: '-1'
    }

    const setAgreeCookie = () => {
        setAgreeWithCookies()
        setIsShowCookiesPopup(false)
    }

    return (
        <Suspense fallback={<Spinner />}>
            <div className={mobileMenu ? "App Open-menu-body" : "App"}>
                <Header
                    mobileMenuHandler={mobileMenuHandler}
                    mobileMenu={mobileMenu}
                >
                    <MobileMenu mobileMenu={mobileMenu} mobileMenuHandler={mobileMenuHandler} />
                    <div className="content-wrapper">
                        <div onClick={mobileMenuHandler} style={mobileMenu ? menuActive : menuUnActive} className="Open-menu-content" />
                        <Route exact path="/" component={Home} />
                        <Route path="/befree/:id" render={() => {
                            return (
                                <Suspense fallback={<BefreeSkeleton />}>
                                    <BefreeLazy done={done} setDone={setDone} />
                                </Suspense>
                            )
                        }} />
                        <Route path="/contacts" render={() => <Contacts done={done} setDone={setDone} />} />

                        <Route path="/casting" render={() => {
                            return (
                                <Suspense fallback={<CastingSkeleton />}>
                                    <CastingPageLazy done={done} setDone={setDone} />
                                </Suspense>
                            )
                        }} />
                    </div>
                    <Footer />
                </Header>
            </div>
            {isShowCookiesPopup && <CookiePopup setCookiePopup={setAgreeCookie} />}
        </Suspense>
    );
}

export default App;
