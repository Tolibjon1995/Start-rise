import React from 'react';
import { Link } from 'react-router-dom'


const Footer = (props) => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-3 mt-3 pl-0 mt-lg-0 text-center">
                            <Link to="/" className="navbar-brand d-flex align-items-center justify-content-center justify-content-lg-start ml-0">
                                <img src="./images/logo.png" className=" mr-3" alt="" />start rise plus
                            </Link>
                        </div>
                        <div className="col-12 col-lg-3 mt-3 mt-lg-0">
                            <ul className="nav d-flex d-lg-block justify-content-center">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link"> {props.hed.nav1}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/portfolio" className="nav-link">{props.hed.nav3}</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-3 mt-3 mt-lg-0">
                            <ul className="nav d-flex d-lg-block justify-content-center">
                                <li className="nav-item">
                                    <Link to="/kurs" className="nav-link">{props.hed.nav2} </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">{props.hed.nav4}</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-3 mt-3 mt-lg-0 d-flex justify-content-center justify-content-lg-end">
                            <div>
                                <div className="icons d-flex justify-content-center justify-content-between">
                                    <a href="https://t.me/startriseuz" className='d-flex justify-content-end align-items-center'>
                                        <img src="./images/Telegram-2 copy.png" alt="" />
                                    </a>
                                    <a href="#contakt" className='d-flex justify-content-end align-items-center'>
                                        <img src="./images/facebook copy.png" alt="" />
                                    </a>
                                    <a href="https://www.instagram.com/p/COICJRaLbT6/?igshid=1uwcu24vgn5rp" className='d-flex justify-content-end align-items-center'>
                                        <img src="./images/instagram copy 2.png" alt="" />
                                    </a>
                                    <a href="#contakt" className='d-flex justify-content-center align-items-center'>
                                        <img src="./images/twitter-icon-png-circle-4 copy.png" alt="" />
                                    </a>
                                </div>
                                <a href="tel:+998 88 250 11 01" className=" text-center text-lg-left nav-link tel">+998 88 250 11 01</a>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </footer>
            <div className="past">
                <div className="container ">
                <div className="row w-100 justify-content-center justify-content-lg-start">
                <p className='manzil'>{props.hed.manzil}</p>
            </div>
                    <div className="row  ">
                        <div className="col dil d-sm-flex align-items-center justify-content-between mt-0 pl-0">
                        <p className='m-0'>Copyright 2021. Start Rise Plus. </p>
                        <p>{props.hed.himoya}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;