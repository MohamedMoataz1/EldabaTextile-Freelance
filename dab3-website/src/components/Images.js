import React, { Fragment, useEffect, useState, useRef } from 'react'
import axios from 'axios'
import '../assets/css/images.css'
import { FaArrowUp } from "react-icons/fa";
import { RiLoader2Line } from "react-icons/ri";
import { TbLoader3 } from "react-icons/tb";
import ClipLoader from "react-spinners/ClipLoader";
import { useTranslation } from 'react-i18next';
const Images = ({ images }) => {
  const { t, i18n } = useTranslation();
  const myRef = useRef(null);
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isloading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(6);
  const [offset, setOffset] = useState(0);
  const [loadRange, setLoadRange] = useState(9);
  const [loadinButton, setLoadingButton] = useState(false);
  const [noMoreLoad, setNoMoreLoad] = useState(false);


  useEffect(() => {
    console.log(myRef);
    console.log(myRef.current);
    const fetchData = async () => {
      try {
        const response = await axios.get(``);
        console.log(response.data.resources)
        setData(response.data.resources);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
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
  }, []);

  const setupIntersectionObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    console.log(hiddenElements);
    hiddenElements.forEach((el) => observer.observe(el));

  };
  setupIntersectionObserver();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };
  const morepictures = () => {
    setLoadRange(prev => prev + 6);
    console.log(loadRange)
    if (loadRange + 6  >= data.length) {
      console.log(loadRange)

      setNoMoreLoad(true);
    }
    setupIntersectionObserver();
  }
  return (

    <section className='section'>
      <h1> {t("gallery1")} <span>{t("gallery2")} </span></h1>
      <div className='line' >
      </div>

      {
        !isloading &&
        <div className="imgscontainer">
          <div className='row1'>
            {
              data.slice(0, loadRange).map((item, index) => {
                let rownum = (index + 1) % 3;
                if (rownum === 0) {
                  rownum = 3;
                }
                return (
                  rownum == 1 ? <img key={index} className='hidden ' src={item.secure_url} alt="image" /> : null
                );
              })
            }
          </div>
          <div className='row2'>
            {
              data.slice(0, loadRange).map((item, index) => {
                let rownum = (index + 1) % 3;
                if (rownum === 0) {
                  rownum = 3;
                }
                return (
                  rownum == 2 ? <img key={index} className='hidden ' src={item.secure_url} alt="image" /> : null
                );
              })
            }
          </div>
          <div className='row3'>
            {
              data.slice(0, loadRange).map((item, index) => {
                let rownum = (index + 1) % 3;
                if (rownum === 0) {
                  rownum = 3;
                }
                return (
                  rownum == 3 ? <img key={index} className='hidden ' src={item.secure_url} alt="image" /> : null
                );
              })
            }
          </div>
        </div>
      }
      {
        isloading &&
        <div style={{ margin: '50px 0 80px 0' }}>

          <ClipLoader size={50} color={"#123abc"} loading={true} />
        </div>
      }
      {
        isVisible &&

        <FaArrowUp onClick={scrollToTop} className='arrowup' />
      }
      {
        noMoreLoad ? null :
          <button onClick={morepictures}>
            {t("gallery3")}
          </button>
      }


    </section>
  )
}

export default Images