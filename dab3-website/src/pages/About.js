import "../assets/css/home.css";
// import company from '../assets/videos/comp2.mov'
import logo from '../assets/images/logo-10.png'
import section1 from '../assets/images/section-1.jpeg'
import section2 from '../assets/images/section-2.jpeg'
import section3 from '../assets/images/section-3.png'
import section4 from '../assets/images/section-4.jpeg'
import slide1 from '../assets/images/slide-1.jpeg'
import slide2 from '../assets/images/slide-2.jpeg'
import slide3 from '../assets/images/slide-3.jpeg'
import slide4 from '../assets/images/slide-4.jpeg'
import slide5 from '../assets/images/slide-5.jpeg'
import slide6 from '../assets/images/slide-6.jpeg'
import oer from '../assets/images/oer.png'
import tun from '../assets/images/tun.png'
import tur from '../assets/images/tur.png'
import alg from '../assets/images/alg.png'
import mor from '../assets/images/mor.png'
import ksa from '../assets/images/ksa.png'
import fra from '../assets/images/fra.png'
import fer from '../assets/images/fer.png'
import ter from '../assets/images/ter.png'
import elt from '../assets/images/elt.png'
import bru from '../assets/images/bru.jpg'
import mon from '../assets/images/mon.png'
import san from '../assets/images/san.jpeg'
import { useEffect, useRef, useState } from 'react';
import '../assets/css/navbar.css'
import '../assets/css/about.css'
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faShop } from '@fortawesome/free-solid-svg-icons';
import Footer from "../components/Footer";
import SimpleImageSlider from "react-simple-image-slider";
import Marquee from "react-fast-marquee";
import { FaArrowUp } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import LangDropDown from "../components/LangDropDown";


const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { t, i18n } = useTranslation();
    const showCaseRef = useRef();
    const navRef = useRef();
    const buttonRef = useRef();
    // setupIntersectionObserver();
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

    const images = [
        { url: slide1 },
        { url: slide2 },
        { url: slide3 },
        { url: slide4 },
        { url: slide5 },
        { url: slide6 },
    ];
    const scrollTodown = () => {
        window.scrollTo({
            top: 920,
            behavior: 'smooth' // Smooth scrolling animation
        });
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 1000) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    // entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));


    }, [])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling animation
        });
    };
    return (
        <div className="about-container" >
            <div className="showcase" ref={showCaseRef}>
                <header>
                    <Link to={'/'}>

                        <img style={{ "width": "5%" }} src={logo} />
                    </Link>

                    <div className="right-part-header">
                        <div className="language-holder">
                            <LangDropDown />
                        </div>
                        <div onClick={showNavbar} ref={buttonRef} className="toggle"></div>
                    </div>
                </header>
                <div className="content">
                    <h2>{t("about1")}

                    </h2>
                    <p>
                        {t("about2")}
                    </p>
                    <svg
                        style={{ marginTop: '20px' }}
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
                <div className="journey">
                    <div className="journey-holder">
                        <div className="slogan-holder">
                            {/* <p className="slogan">
                                From Thread to Trend <br /> Weaving Excellence Since 1980
                            </p>
                            <div className="vertical-border-header"></div> */}
                            <h1 className="slogan">
                                {t("about27")} <span>{t("about3")}</span> {t("about4")} <span> {t("about5")}</span> <br /> {t("about6")}<span> {t("about7")}</span> {t("about28")}
                            </h1>
                            <div className="vertical-border-header"></div>
                        </div>

                        <div className="section-holder hidden">
                            <div style={{ 'alignItems': (t("about1") === 'من نحن') ? 'flex-end' : 'flex-start', 'textAlign': (t("about1") === 'من نحن') ? 'right' : 'left' }} className="text">
                                <p> {t("about8")}  {t("about9")} </p>
                                <div className="vertical-border"></div>
                                <span>
                                    <strong style={{ 'color': '#899564' }}> {t("about10")}   </strong> {t("about11")}.
                                </span>
                            </div>
                            <div className="img img-desk">
                                <SimpleImageSlider
                                    width={600}
                                    height={504}
                                    showBullets={true}
                                    images={images}
                                    loop={true}
                                    autoPlay={true}
                                    style={{
                                        borderRadius: '1px',
                                        boxShadow: '0px 0px 5px 1px rgba(0, 0, 0, 0.5)'
                                    }}
                                />
                            </div>
                            <div className="img-mobile">
                                <SimpleImageSlider
                                    width={370}
                                    height={350}
                                    showBullets={true}
                                    images={images}
                                    loop={true}
                                    autoPlay={true}
                                />
                            </div>
                        </div>
                        <div className="section-holder hidden">
                            <div style={{ 'alignItems': (t("about1") === 'من نحن') ? 'flex-end' : 'flex-start', 'textAlign': (t("about1") === 'من نحن') ? 'right' : 'left' }} className="text">
                                <p>{t("about12")}</p>
                                <div className="vertical-border"></div>
                                <span>
                                    {t("about13")} <strong style={{ 'color': '#899564' }}> {t("about14")}  </strong> {t("about15")} <strong style={{ 'color': '#899564' }}>{t("about16")} </strong>, <strong style={{ 'color': '#899564' }}>{t("about17")} </strong> {t("about18")}.
                                </span>
                            </div>
                            <div className="img">
                                <img style={{ 'width': '100%' }} src={section2} />
                            </div>
                        </div>
                        <div className="section-holder hidden">
                            <div style={{ 'alignItems': (t("about1") === 'من نحن') ? 'flex-end' : 'flex-start', 'textAlign': (t("about1") === 'من نحن') ? 'right' : 'left' }} className="text">
                                <p>{t("about19")}</p>
                                <div className="vertical-border"></div>
                                <span>{t("about20")}
                                    <strong style={{ 'color': '#899564' }}>{t("about21")}  </strong>{t("about22")}.
                                </span>
                            </div>
                            <div className="img">
                                <img style={{ 'width': '100%' }} src={section3} />
                            </div>
                        </div>
                        <div className="section-holder hidden">
                            <div style={{ 'alignItems': (t("about1") === 'من نحن') ? 'flex-end' : 'flex-start', 'textAlign': (t("about1") === 'من نحن') ? 'right' : 'left' }} className="text">
                                <p>{t("about23")} </p>
                                <div className="vertical-border"></div>
                                <span>{t("about24")}
                                    .
                                </span>
                            </div>
                            <div className="img">
                                <img style={{ 'width': '100%' }} src={section4} />
                                <a href="/shop">{t("about25")}  &nbsp; &nbsp;<FontAwesomeIcon icon={faShop} bounce /> </a>
                            </div>
                        </div>
                        <div className="orel-holder">
                            <Marquee
                                direction="right"
                                speed={200}
                            >
                                <img className="countries-img-orel" src={oer} />
                                <img className="countries-img-orel" src={mon} />
                                <img className="countries-img-orel" src={san} />
                                <img className="countries-img-orel" src={ter} />
                                <img className="countries-img-orel" src={bru} />
                                <img className="countries-img-orel" src={elt} />
                                <img className="countries-img-orel" src={fer} />
                            </Marquee>
                        </div>
                        <div className="countries">
                            <p>
                                {t("about26")}

                            </p>
                            <Marquee>
                                <img className="countries-img" src={tun} />
                                <img className="countries-img" src={alg} />
                                <img className="countries-img" src={mor} />
                                <img className="countries-img" src={tur} />
                                <img className="countries-img" src={ksa} />
                                <img className="countries-img" src={fra} />
                            </Marquee>
                            {/* <div className="flags-holder">
                            </div> */}
                        </div>

                    </div>
                </div>
                <Footer />
                {
                    isVisible &&

                    <FaArrowUp onClick={scrollToTop} className='arrowup' />
                }
            </div>
            <Navbar ref={navRef} />
        </div>
    );
}

export default About;