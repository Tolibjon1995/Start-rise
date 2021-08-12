import React, { useEffect } from 'react';
import Carusel from '../Carusel';
import Hodimlar from './Hodimlar';
import { Link } from 'react-router-dom';
import kompyuter from '../images/kom.png'
import VideoCarus from './VideoCarus';
import Telefon from './Telefon';


const Headers = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])





    return (
        <div>

            <header>
                <div className="container">
                    <div className="row mt-5">


                        <div data-aos="zoom-in-down" data-aos-anchor-placement="top-center" className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                            <div className="containers">
                                <div className="box box1"></div>
                                <div className="box box3"></div>
                                <div className="box box2"></div>
                                <div className="box box4"></div>
                            </div>
                        </div>
                        <div data-aos="zoom-in-down" data-aos-anchor-placement="top-center" className="col-12 col-lg-6  mt-sm-5 text-center text-lg-left glavni-info">
                            <h1 className='hash'>{props.hed.logo}</h1>
                            <h5>- {props.hed.hedinfo}</h5>
                            <Link to="/company" className="btn btn1 third" id="modal-button">{props.hed.battn}</Link>
                        </div>

                    </div>
                </div>

            </header>
            <main>
                <section id='skrol' className="kurslar">
                    <div className="container tuzatish">
                        <div className="row kurs-foto">
                            <div data-aos="fade-down-right" data-aos-anchor-placement="top-center" className="col-12 col-lg-6 text-center text-lg-left kurs-info">
                                <h1>{props.hed.kurstitle}</h1>
                                <h5>{props.hed.kursinfo}</h5>
                                <p>{props.hed.kursp}</p>
                                <div className="d-block d-md-flex  align-items-center justify-content-center justify-content-lg-start">
                                    <Link to="/kurs" className="btn btn1 third">{props.hed.battn}</Link>
                                    <Link to="/register" className="btn btn2 third">{props.hed.kusrga}</Link>
                                </div>
                            </div>
                            <div data-aos="fade-down-left" data-aos-anchor-placement="top-center" className="col-12 col-lg-6">
                                <div className="wrapper">
                                    <div className="main-div">
                                        <img src={kompyuter} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section id='skrol' className="portfolio" >
                    <div className="container">
                        <div className="row">

                            <div data-aos="zoom-out-down" data-aos-anchor-placement="top-center" className="portfolio-foto w-100">
                                <div data-aos="zoom-out-down" className="col-12 col-lg-6 text-center text-lg-left offset-lg-6 portfolio-info">
                                    <h1 className='port-fol'>{props.hed.nav3}</h1>
                                    <h5>{props.hed.port}</h5>
                                    <p>{props.hed.portp}</p>
                                    <Link to="/portfolio" className="btn third">{props.hed.ishlar}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='skrol' className="xizmatlar" >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 text-center">
                                <h1>{props.hed.xiz}</h1>
                                <h5>{props.hed.xizp}</h5>
                            </div>

                            <Carusel hed={props.hed} />
                        </div>
                    </div>
                </section>
                <section id='skrol' className="jamoa">
                    <div className="container">
                        <div className="row w-100 d-flex justify-content-center">
                            <div className="col-12 col-md-5 nimadir2 text-center">
                                <h1>{props.hed.jamoa}</h1>
                                <h5>{props.hed.jamoap}</h5>
                            </div>
                        </div>
                        <Hodimlar hed={props.hed} />
                    </div>
                </section>
                <section id='skrol' className="contakt container">
                    <VideoCarus />
                </section>
                <section id='skrol' className="container">
                    <Telefon hed={props.hed} />
                </section>
            </main>
        </div>
    );
};

export default Headers;