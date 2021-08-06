import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { _en, _ru, _uz } from "../language/lang";
const Navbars = (props) => {
  const [open, setOpen] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  // const [lang, setLang] = useState(_uz);
  const location = useLocation();


  const modOpen = () => {
    setOpen(!open);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <div>
      <div className={`navbar-fixsed w-100 ${colorChange ? 'gap' : 'navbar'} `}>
        <div className='container'>
          <div className='row mt-2 logoe justify-content-between w-100'>
            <Link
              to='/'
              className='navbar-brand d-flex align-items-center  text-white h1'
            >
              <img src='./images/logo.png' className='logo mr-3' alt='Logo' />
              START RISE PLUS
            </Link>
            <div className='d-flex'>
            <ul className='nav nav-bil nav-tabs'>
            <li className='nav-item'>
              <Link
                to='/'
                className={`nav-link chik ${location.pathname === '/' ? 'active' : ''
                  }`}
                id='activ'
              >
                {props.navs.nav1}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/kurs'
                className={`nav-link chik ${location.pathname === '/kurs' ? 'active' : ''
                  }`}
                id='activ'
              >
                {props.navs.nav2}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/portfolio'
                className={`nav-link chik ${location.pathname === '/portfolio' ? 'active' : ''
                  }`}
                id='activ'
              >
                {props.navs.nav3}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className={`nav-link chik ${location.pathname === '/contact' ? 'active' : ''
                  }`}
              >
                {props.navs.nav4}
              </Link>
            </li>
          </ul>
          <div className='open-drop ml-3'>

            <div

            className={`flag ${props.navs.id === 1 ? 'active' : ''}`}
              onClick={() => props.funk(_uz)}
            >
              <img src="/images/flag/uzbekistan.png"  alt="" />
            </div>
            <div
            className={`flag ${props.navs.id === 2 ? 'active' : ''}`}

              onClick={() => props.funk(_ru)}
            >
              <img src="/images/flag/russia.png" alt="" />
            </div>
            <div
            className={`flag ${props.navs.id === 3 ? 'active' : ''}`}

              onClick={() => props.funk(_en)}
            >
              <img src="/images/flag/united-states.png" alt="" />
            </div>

          </div>
            </div>
            <button
              onClick={modOpen}
              className={`hamburger ${open === true ? 'focus' : ''}`}
            >
              <span className='burger'></span>
              <span className='burger www'></span>
              <span className='burger'></span>
            </button>

            <div className={`content ${open === true ? 'show' : ''}`}>
              <div className='flex'>
                <nav>
                  <ul id='links' className='navigation'>
                    <li>
                      <Link to='/' onClick={modOpen}>
                      {props.navs.nav1}
                      </Link>
                    </li>
                    <li>
                      <Link to='/kurs' onClick={modOpen}>
                      {props.navs.nav2}
                      </Link>
                    </li>
                    <li>
                      <Link to='/portfolio' onClick={modOpen}>
                      {props.navs.nav3}
                      </Link>
                    </li>

                    <li>
                      <Link to='/contact' onClick={modOpen}>
                      {props.navs.nav4}
                      </Link>
                    </li>
                  </ul>
                  <div className='open-drop d-flex align-items-center justify-content-between'>

              <div

                className='flag'
                onClick={() => props.funk(_uz)}
              >
                <img src="/images/flag/uzbekistan.png" alt="" />
              </div>
              <div
                className='flag'

                onClick={() => props.funk(_ru)}
              >
                <img src="/images/flag/russia.png" alt="" />
              </div>
              <div
                className='flag'

                onClick={() => props.funk(_en)}
              >
                <img src="/images/flag/united-states.png" alt="" />
              </div>

            </div>
                </nav>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
