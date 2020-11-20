import React, { useState } from 'react';
import Header from "./components/header/Header";
import { Route } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import MobileMenu from './components/mobile-menu/Mobile-menu';
import BeFree from './components/be-free/Be-free';
import Contacts from './components/contacts/Contacts';
import './App.scss';
import CastingPage from "./components/casting/Casting-page";


function App() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [openLocaleMenu, setOpenLocaleMenu] = useState(false)

    const mobileMenuHandler = () => setMobileMenu(!mobileMenu)

    const menuActive = {
        opacity: "1",
        zIndex: '5'
    }

    const menuUnActive = {
        opacity: '0',
        zIndex: '-1'
    }

    return (
            <div className={mobileMenu ? "App Open-menu-body" : "App"}>
                <Header
                    setOpenLocaleMenu={setOpenLocaleMenu}
                    openLocaleMenu={openLocaleMenu}
                    mobileMenuHandler={mobileMenuHandler}
                    mobileMenu={mobileMenu}
                />
                <MobileMenu mobileMenu={mobileMenu} mobileMenuHandler={mobileMenuHandler} />
                <div className="content-wrapper">
                    <div onClick={mobileMenuHandler} style={mobileMenu ? menuActive : menuUnActive} className="Open-menu-content" />
                    <Route exact path="/" component={Home} />
                    <Route path="/befree/:id" component={BeFree} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/casting" component={CastingPage} />
                </div>
                <Footer />
            </div>
    );
}

export default App;
