import React, { Fragment, useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar';
import { NavLink, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo-10.png'
import product0 from "../assets/images/product0.jpg"
import product1 from "../assets/images/product1.jpg"
import product2 from "../assets/images/product2.jpg"
import product3 from "../assets/images/product3.jpg"
import product4 from "../assets/images/product4.jpg"
import product5 from "../assets/images/product5.jpg"
import product6 from "../assets/images/product6.jpg"
import Footer from '../components/Footer';
import '../assets/css/shop.css'
import '../assets/css/navbar.css'
import "../assets/css/home.css";
import { useTranslation } from 'react-i18next';
import LangDropDown from '../components/LangDropDown';
import { FaBalanceScaleLeft } from "react-icons/fa";
import { FaTextWidth } from "react-icons/fa6";

import { useLocation } from 'react-router-dom';
const SingleCategory = () => {
    const { t, i18n } = useTranslation();
    const categoryID = useParams().categoryid;
    const location = useLocation();
    const categories = location.state.categories;

    const showCaseRef = useRef();
    const navRef = useRef();
    const buttonRef = useRef();
    const headerRef = useRef(null);
    const [intervalId, setintervalId] = useState(null);
    const products = [
        product0,
        product1,
        product2,
        product3,
        product4,
        product5,
        product6,
        product6,
        product6,
        product6,
    ]
    const [bigImg, setBigImg] = useState(products[0]);
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
    const handleBigImg = (smallimg) => {
        const showedImg = document.getElementsByClassName('showed')[0]
        if (showedImg) {

            showedImg.classList.remove("showed");
        }
        setBigImg(smallimg);
        clearInterval(intervalId);
        setintervalId(null);
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log("indside useefect");
        var i = 0;
        const smallimgs = document.querySelectorAll(".small-imgs img");
        const intervalId = setInterval(() => {
            if (i == products.length - 1) {
                smallimgs[i].classList.remove("showed");
                i = 0;
            } else {
                smallimgs[i].classList.remove("showed");
                i++;
            }
            setBigImg(products[i]);
            smallimgs[i].classList.add("showed");

        }, 1800);
        setintervalId(intervalId);
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
        <Fragment>
            <div className="showcaseGall" ref={showCaseRef}>
                <header style={{ backgroundColor: 'black' }} ref={headerRef} >
                    <NavLink to={'/'}>
                        <img style={{ "width": "5%" }} src={logo} />
                    </NavLink>
                    <div className="right-part-header">
                        <LangDropDown />
                        <div onClick={showNavbar} ref={buttonRef} className="toggle"></div>
                    </div>
                </header>
                <div className='piece'>
                    <div className='piece-text'>
                        <h1 className='section-title'> {categories[categoryID].name}</h1>
                        <p>
                            {categories[categoryID].description}
                        </p>
                        <p><span>{t("shop19")}  </span> &nbsp; <FaTextWidth /> &nbsp;: &nbsp; {categories[categoryID].width} </p>
                        <p> <span>{t("shop18")}</span> &nbsp; <FaBalanceScaleLeft /> &nbsp; : &nbsp; {categories[categoryID].gsm} </p>


                    </div>
                    <div className='imgs'>
                        <div className='small-imgs'>
                            {
                                products.map((el) => (
                                    <img src={`${el}`} onClick={() => handleBigImg(el)} ></img>
                                ))
                            }
                        </div>
                        <div className='big-img'>
                            <img src={`${bigImg}`} />
                        </div>
                    </div>


                </div>

                <Footer />
            </div>
            <Navbar ref={navRef} />

        </Fragment>
    )
}

export default SingleCategory