import "../assets/css/home.css";
import "../assets/css/contact.css";
import logo from '../assets/images/logo-10.png'
import { useEffect, useRef, useState } from 'react';
import '../assets/css/navbar.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contact from "../assets/images/contact.png";
import GoogleMap from 'google-maps-react-markers'
import Marker from "../components/Marker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGlobe, faPhone, faMobile, faFax } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";
import LangDropDown from "../components/LangDropDown";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContactUs = () => {
    const showCaseRef = useRef();
    const navRef = useRef();
    const buttonRef = useRef();
    const mapRef = useRef(null)
    const [mapReady, setMapReady] = useState(false)
    const [height, setHeight] = useState();
    const headerRef = useRef(null);
    const { t, i18n } = useTranslation();
    useEffect(() => {
        if (headerRef.current) {

            const headerHeight = headerRef.current.offsetHeight;
            const windowHeight = window.innerHeight;
            const newHeight = windowHeight - headerHeight;
            setHeight(newHeight);
        }
    }, []);
    const scrollTodown = () => {
        window.scrollTo({
            top: 920,
            behavior: 'smooth' // Smooth scrolling animation
        });
    };
    const onGoogleApiLoaded = ({ map, maps }) => {
        mapRef.current = map
        setMapReady(true)
    }
    const onMarkerClick = (e, { markerId, lat, lng }) => {
        console.log('This is ->', markerId)
        //30.25850754964023, 31.4552256692718
        // inside the map instance you can call any google maps method
        mapRef.current.setCenter({ lat, lng })
        window.open(``, '');
        // ref. https://developers.google.com/maps/documentation/javascript/reference?hl=it
    }
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
        <div className="contactUs-container">
            <div className="showcase" ref={showCaseRef}>
                <header ref={headerRef}>
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
                <div className="about-content" style={{ height: `${height}px`, width: '100%' }}>
                    <div className="text-holder"> <p className="part1"> {t("contact1")}  <span className="part2"> {t("contact2")} </span> </p>  </div>
                    <p className="desc">
                        {t("contact3")}
                    </p>
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
                            d=""
                        ></path>
                    </svg>
                </div>
                <div className="info-holder">
                    <div className="contact-form">

                        <p >
                            {t("contact4")}
                        </p>
                        <p className="text-us" style={{ "width": "100%" }}> {t("contact5")}:</p>
                        <div className="data">
                            <p className="iconSize" style={{ "textAlign": 'center' }} > <FontAwesomeIcon icon={faPhone} color="white" /></p>
                            <span className="icon">01010890678</span>
                        </div >
                        <div className="data">
                            <p className="iconSize" style={{ "textAlign": 'center' }}> <FontAwesomeIcon icon={faMobile} color="white" />  </p>
                            <span className="icon">22733483</span>
                        </div>
                        <div className="data">
                            <p className="iconSize" style={{ "textAlign": 'center' }}> <FontAwesomeIcon icon={faEnvelope} color="white" /></p>
                            <span className="icon">eldabi@tex.com</span>
                        </div>
                        <div className="data">
                            <p className="iconSize" style={{ "textAlign": 'center' }}> <FontAwesomeIcon icon={faFax} color="white" />  </p>
                            <span className="icon">2545654684</span>
                        </div>

                    </div>
                    <div className="maps-holder">
                        <GoogleMap
                            apiKey=""
                            defaultCenter={{ lat: 30.25850754964023, lng: 311.4552256692718 }}
                            defaultZoom={15}
                            mapMinHeight="72vh"
                            onGoogleApiLoaded={onGoogleApiLoaded}
                            onChange={(map) => console.log('Map moved', map)}
                            onDrag={false}
                        >
                            <Marker
                                lat={30.2585075496402311}
                                lng={31.4552256692714558}
                                markerId={"EL DABI TEX"}
                                onClick={onMarkerClick}
                                onDrag={false}
                            />
                        </GoogleMap>
                    </div>

                </div>
                <Footer />
            </div>
            <Navbar ref={navRef} />
        </div>

    );
}

export default ContactUs;