import { useEffect, useRef, useState } from "react";
import '../assets/css/navbar.css'
import '../assets/css/shop.css'
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from "../components/Footer";
import logo from '../assets/images/logo-10.png'
import fire from '../assets/images/fire.png'
import solar from '../assets/images/solar.png'
import sun from '../assets/images/sun.png'
import virus from '../assets/images/no-virus.png'
import category1 from '../assets/images/category1.jpg'
import category2 from '../assets/images/category2.jpg'
import category3 from '../assets/images/category3.jpg'
import category4 from '../assets/images/category4.jpg'
import category5 from '../assets/images/category5.jpg'
import category6 from '../assets/images/category6.jpg'
import category7 from '../assets/images/category7.jpg'
import category8 from '../assets/images/category8.jpg'
import category9 from '../assets/images/category9.jpg'
import category10 from '../assets/images/category10.jpg'
import { FaArrowUp } from "react-icons/fa";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { FaTextWidth } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LangDropDown from "../components/LangDropDown";

const Shop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const showCaseRef = useRef();
    const navRef = useRef();
    const navigate = useNavigate();
    const buttonRef = useRef();
    const { t, i18n } = useTranslation();
    const categories = [
        {
            srcimg: category1, description: '  a blend of polyester and polypropylene, are renowned for their exceptional durability and resilience in fabric manufacturing. These fibers offer fabrics that are highly resistantto moisture and chemicals, making them ideal for creating durable outdoor and industrial textiles. Shoayrat fibers contribute to the production of versatile fabrics known for theirstrength and performance in challenging environments.'
            , name: 'shoyrat Beach', gsm: '160', width: '160 cm '
        },
        { srcimg: category2, description: "description:'  a blend of polyester and polypropylene, are renowned for their exceptional durability and resilience in fabric manufacturing. These fibers offer fabrics that are highly resistantto moisture and chemicals, making them ideal for creating durable outdoor and industrial textiles. Shoayrat fibers contribute to the production of versatile fabrics known for theirstrength and performance in challenging environments.", name: 'Zebda', gsm: '160', width: '160 cm ' },
        { srcimg: category3, description: "description:'  a blend of polyester and polypropylene, are renowned for their exceptional durability and resilience in fabric manufacturing. These fibers offer fabrics that are highly resistantto moisture and chemicals, making them ideal for creating durable outdoor and industrial textiles. Shoayrat fibers contribute to the production of versatile fabrics known for theirstrength and performance in challenging environments.", name: 'Fiber Beach', gsm: '160', width: '160 cm ' },
        { srcimg: category4, description: "description:'  a blend of polyester and polypropylene, are renowned for their exceptional durability and resilience in fabric manufacturing. These fibers offer fabrics that are highly resistantto moisture and chemicals, making them ideal for creating durable outdoor and industrial textiles. Shoayrat fibers contribute to the production of versatile fabrics known for theirstrength and performance in challenging environments.", name: 'Mayoh Miami', gsm: '160', width: '160 cm ' },
        { srcimg: category5, description: "description:'  a blend of polyester and polypropylene, are renowned for their exceptional durability and resilience in fabric manufacturing. These fibers offer fabrics that are highly resistantto moisture and chemicals, making them ideal for creating durable outdoor and industrial textiles. Shoayrat fibers contribute to the production of versatile fabrics known for theirstrength and performance in challenging environments.", name: 'Carpet', gsm: '330', width: '190 cm ' },
        { srcimg: category6, description: "description:'  a blend of polyester and polypropylene, are renowned for their exceptional durability and resilience in fabric manufacturing. These fibers offer fabrics that are highly resistantto moisture and chemicals, making them ideal for creating durable outdoor and industrial textiles. Shoayrat fibers contribute to the production of versatile fabrics known for theirstrength and performance in challenging environments.", name: 'Katyfah Heidi', gsm: '260', width: '180 cm ' },
        { srcimg: category7, description: "description:'  a blend of polyester and polypropylene, are renowned for their exceptional durability and resilience in fabric manufacturing. These fibers offer fabrics that are highly resistantto moisture and chemicals, making them ideal for creating durable outdoor and industrial textiles. Shoayrat fibers contribute to the production of versatile fabrics known for theirstrength and performance in challenging environments.", name: 'Mayoh Nylon', gsm: '240', width: '160 cm ' },
        { srcimg: category8, description: "description:'  a blend of polyester and polypropylene, are renowned for their exceptional durability and resilience in fabric manufacturing. These fibers offer fabrics that are highly resistantto moisture and chemicals, making them ideal for creating durable outdoor and industrial textiles. Shoayrat fibers contribute to the production of versatile fabrics known for theirstrength and performance in challenging environments.", name: 'Dafyah', gsm: '180', width: '160 cm ' },
        { srcimg: category9, description: "description:'  a blend of polyester and polypropylene, are renowned for their exceptional durability and resilience in fabric manufacturing. These fibers offer fabrics that are highly resistantto moisture and chemicals, making them ideal for creating durable outdoor and industrial textiles. Shoayrat fibers contribute to the production of versatile fabrics known for theirstrength and performance in challenging environments.", name: 'Mayoh Octavia', gsm: '140', width: '160 cm ' },
        { srcimg: category10, description: "description:'  a blend of polyester and polypropylene, are renowned for their exceptional durability and resilience in fabric manufacturing. These fibers offer fabrics that are highly resistantto moisture and chemicals, making them ideal for creating durable outdoor and industrial textiles. Shoayrat fibers contribute to the production of versatile fabrics known for theirstrength and performance in challenging environments.", name: 'Polar', gsm: '320', width: '200 cm ' },

    ]
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
    const scrollTodown = () => {
        window.scrollTo({
            top: 920,
            behavior: 'smooth' // Smooth scrolling animation
        });
    };
    useEffect(() => {

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
        const handleScroll = () => {
            if (window.pageYOffset > 1000) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };


    }, [])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling animation
        });
    };
    return (
        <div className="shop-container" >
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
                <div className="shop-content">
                    <h2>
                        {t("shop1")}

                    </h2>
                    <p>
                        {t("shop2")}

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
                <div className="fabrics-type-container">

                    <div className="card hidden">
                        <input type="checkbox" id="card1" className="more" aria-hidden="true" />
                        <div className="card-content">
                            <div className="front type-1" >
                                <div className="inner">
                                    <h2>{t("shop3")}</h2>
                                    <label htmlFor="card1" className="button" aria-hidden="true">
                                        {t("shop4")}
                                    </label>
                                </div>
                            </div>
                            <div className="back ">
                                <div className="inner">
                                    <div className="info">
                                        <span> <img src={fire} />{t("shop5")}</span>

                                    </div>
                                    <div className="info">
                                        <span><img src={sun} />{t("shop6")} </span>

                                    </div>
                                    <div className="info">
                                        <span><img src={solar} />{t("shop7")} </span>

                                    </div>
                                    <div className="info">
                                        <span><img src={virus} /> {t("shop8")}</span>

                                    </div>
                                    <div className="description">
                                        <p> {t("shop9")}</p>
                                    </div>
                                    <label htmlFor="card1" className="button return" aria-hidden="true">
                                        <FontAwesomeIcon icon={faArrowLeft} color="black" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card hidden">
                        <input type="checkbox" id="card2" className="more" aria-hidden="true" />
                        <div className="card-content">
                            <div className="front type-2" >
                                <div className="inner">
                                    <h2>{t("shop10")}</h2>
                                    <label htmlFor="card2" className="button" aria-hidden="true">
                                        {t("shop4")}
                                    </label>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <div className="info">
                                        <span> <img src={fire} /> {t("shop5")}</span>

                                    </div>
                                    <div className="info">
                                        <span><img src={sun} /> {t("shop6")} </span>

                                    </div>
                                    <div className="info">
                                        <span><img src={solar} />{t("shop7")} </span>

                                    </div>
                                    <div className="info">
                                        <span><img src={virus} /> {t("shop8")}</span>

                                    </div>
                                    <div className="description">
                                        <p>{t("shop11")} </p>

                                    </div>
                                    <label htmlFor="card2" className="button return" aria-hidden="true">
                                        <FontAwesomeIcon icon={faArrowLeft} color="black" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card hidden">
                        <input type="checkbox" id="card3" className="more" aria-hidden="true" />
                        <div className="card-content">
                            <div className="front type-3" >
                                <div className="inner">
                                    <h2>{t("shop12")}</h2>
                                    <label htmlFor="card3" className="button" aria-hidden="true">
                                        {t("shop4")}
                                    </label>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <div className="info">
                                        <span> <img src={fire} /> {t("shop5")}</span>

                                    </div>
                                    <div className="info">
                                        <span><img src={sun} /> {t("shop6")}</span>

                                    </div>
                                    <div className="info">
                                        <span><img src={solar} /> {t("shop7")}</span>

                                    </div>
                                    <div className="info">
                                        <span><img src={virus} />{t("shop8")} </span>

                                    </div>
                                    <div className="description">
                                        <p>{t("shop13")}</p>
                                    </div>

                                    <label htmlFor="card3" className="button return" aria-hidden="true">
                                        <FontAwesomeIcon icon={faArrowLeft} color="black" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="category-section-container">
                    <h1> {t("shop20")} <span> {t("shop17")}</span></h1>
                    <div className="vertical-border"></div>
                    <div className="category-container">
                        {
                            categories.map((el, idx) => (
                                <div className="category " key={idx} style={{ backgroundImage: `url(${el.srcimg})` }} >
                                    <div className="category-content hidden">
                                        <h3>{el.name}</h3>
                                        <img src={el.srcimg} alt="img" />
                                        <div className="detailed">
                                            <p>  {t("shop18")} &nbsp; <FaBalanceScaleLeft /> &nbsp; : &nbsp; {el.gsm} </p>
                                            <p>  {t("shop19")}  &nbsp; <FaTextWidth />&nbsp; :&nbsp; {el.width} </p>
                                            <Link to={`${idx}`} state={{ categories }} style={{ textDecoration: 'none', color: 'inherit', margin: "auto" }} >
                                                <button className="button">{t("shop14")}</button>
                                            </Link>
                                        </div>

                                    </div>

                                    <div className="category-overlay"></div>
                                </div>

                            ))
                        }


                    </div>


                </div>
                <Footer />
            </div>
            {
                isVisible &&

                <FaArrowUp onClick={scrollToTop} className='arrowup' />
            }
            <Navbar ref={navRef} />
        </div >
    );
}

export default Shop;
