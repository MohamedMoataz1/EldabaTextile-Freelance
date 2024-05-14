import React, { Fragment, useEffect, useRef, useState } from 'react'
import '../assets/css/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../components/Navbar";
import logo from '../assets/images/logo-10.png'
import "../assets/css/home.css";
import VideoCarousel from '../components/VideoCarousel';
import Footer from '../components/Footer';
import Images from '../components/Images';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LangDropDown from '../components/LangDropDown';
import axios from 'axios';
const Gallery = () => {
    const showCaseRef = useRef();
    const navRef = useRef();
    const buttonRef = useRef();
    const headerRef = useRef(null);
    const [height, setHeight] = useState();
    useEffect(() => {
        if (headerRef.current) {

            const headerHeight = headerRef.current.offsetHeight;
            const windowHeight = window.innerHeight;
            const newHeight = windowHeight - headerHeight;
            setHeight(newHeight);
            document.documentElement.style.setProperty('--header-gall-height', `${newHeight}px`);
        }
    }, []);

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
    const scrollTodown = () => {
        window.scrollTo({
            top: 920,
            behavior: 'smooth' // Smooth scrolling animation
        });
    };

    return (
        <Fragment>
            <div className="showcaseGall" ref={showCaseRef}>
                <header style={{ backgroundColor: 'black' }} ref={headerRef} >

                    <Link to={'/'}>

                        <img style={{ "width": "5%" }} src={logo} />
                    </Link>
                    <div className="right-part-header">
                        <div className="language-holder">
                            <LangDropDown/>
                        </div>
                        <div onClick={showNavbar} ref={buttonRef} className="toggle">

                        </div>
                    </div>
                </header>


                <div className='header-gall' style={{ height: `${height}px`, width: '100%' }} >
                    <VideoCarousel />
                    <svg
                        onClick={() => scrollTodown()}
                        viewBox="0 0 24 24"
                        width="40"  // Adjust width as needed
                        height="40" // Adjust height as needed
                        className="mt-16 animate-bounce_1.5s_ease-in-out_infinite text-accent animate-bounce" // Add classes
                        astro-icon="iconoir:mouse-scroll-wheel" // Add custom attribute
                        aria-label="Scroll Down Icon" // Add aria-label for accessibility
                    // role="img" // Add role="img" to indicate that this represents an image
                    >
                        <path
                            fill="currentColor"
                            strokeWidth="1.5"
                            d="m12 5 .53-.53a.75.75 0 0 0-1.06 0L12 5zm0 8-.53.53a.75.75 0 0 0 1.06 0L12 13zM9.47 6.47a.75.75 0 0 0 1.06 1.06L9.47 6.47zm4 1.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06zm-2.94 2.94a.75.75 0 1 0-1.06 1.06l1.06-1.06zm4 1.06a.75.75 0 1 0-1.06-1.06l1.06 1.06zM3.25 10v4h1.5v-4h-1.5zm17.5 4v-4h-1.5v4h1.5zm-9.5-9v8h1.5V5h-1.5zm.22-.53-2 2 1.06 1.06 2-2-1.06-1.06zm0 1.06 2 2 1.06-1.06-2-2-1.06 1.06zm1.06 6.94-2-2-1.06 1.06 2 2 1.06-1.06zm0 1.06 2-2-1.06-1.06-2 2 1.06 1.06zM20.75 10A8.75 8.75 0 0 0 12 1.25v1.5A7.25 7.25 0 0 1 19.25 10h1.5zM12 22.75A8.75 8.75 0 0 0 20.75 14h-1.5A7.25 7.25 0 0 1 12 21.25v1.5zM3.25 14A8.75 8.75 0 0 0 12 22.75v-1.5A7.25 7.25 0 0 1 4.75 14h-1.5zm1.5-4A7.25 7.25 0 0 1 12 2.75v-1.5A8.75 8.75 0 0 0 3.25 10h1.5z"
                        // d="M12 18.25L5.51 11.76a1.5 1.5 0 0 1 2.12-2.12L12 14.01l4.37-4.37a1.5 1.5 0 0 1 2.12 2.12L12 18.25z"
                        ></path>
                    </svg>
                </div>


                <Images />

                <Footer />
            </div>
            <Navbar ref={navRef} />
        </Fragment >
    )
}

export default Gallery