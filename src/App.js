import React, { lazy, Suspense, useCallback, useState } from 'react';
import Header from "./components/header/Header";
import { Route } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import MobileMenu from './components/mobile-menu/Mobile-menu';
import Contacts from './components/contacts/Contacts';
import CastingPage from "./components/casting/Casting-page";
import Spinner from './components/spinner/Spinner';
import BefreeSkeleton from './components/be-free/be-free-skeleton';
import './App.scss';



const BefreeLazy = lazy(() => import('./components/be-free/Be-free'))


function App() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [done, setDone] = useState(false)

    const mobileMenuHandler = useCallback(() => setMobileMenu(!mobileMenu), [mobileMenu])

    const menuActive = {
        opacity: "1",
        zIndex: '5'
    }

    const menuUnActive = {
        opacity: '0',
        zIndex: '-1'
    }

    return (
        <Suspense fallback={<Spinner />}>
            <div className={mobileMenu ? "App Open-menu-body" : "App"}>
                <Header
                    mobileMenuHandler={mobileMenuHandler}
                    mobileMenu={mobileMenu}
                />
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
                    <Route path="/casting" render={() => <CastingPage done={done} setDone={setDone} />} />
                </div>
                <Footer />
            </div>
        </Suspense>
    );
}

export default App;
