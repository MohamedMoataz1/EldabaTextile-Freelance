import "../assets/css/home.css";
import company from '../assets/videos/comp2.mp4'
import logo from '../assets/images/logo-10.png'
import { useRef, useState } from 'react';
import '../assets/css/navbar.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoCarousel from "../components/VideoCarousel";
import { useTranslation } from "react-i18next";
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react';
import LangDropDown from "../components/LangDropDown";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
    const showCaseRef = useRef();
    const navRef = useRef();
    const buttonRef = useRef();
    const { t, i18n } = useTranslation();
    const showNavbar = () => {
        navRef.current.classList.toggle(
            "active"
        );
        showCaseRef.current.classList.toggle(
            "active"
        );
        buttonRef.current.classList.toggle(
            "active"
        );
    };
    return (
        <div >
            <div className="showcase" ref={showCaseRef}>
                <header style={{ 'background': 'transparent' }}>
                    <Link to={'/'}>

                        <img style={{ "width": "5%" }} src={logo} />
                    </Link>
                    <div className="right-part-header">
                        <LangDropDown />
                        <div onClick={showNavbar} ref={buttonRef} className="toggle"></div>
                    </div>
                </header>
                <video src={company} autoPlay muted loop playsInline></video>
                <div className="overlay"></div>
                <div className="text-container">

                    <div className="text">
                        <h2> {t("home1")} </h2>
                        <h3> {t('home2')}</h3>
                        <p>{t('home3')} .</p>
                        <a href="/shop">{t('home4')}    </a>
                    </div>
                </div>
                <Footer />
            </div>
            <Navbar ref={navRef} />
        </div>

    );
}

export default HomePage;