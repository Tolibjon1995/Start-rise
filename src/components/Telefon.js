import React from 'react';
import telFoto from '../images/START.png'
const Telefon = (props) => {
    return (
        <div>
            <div className="row">
                <div data-aos="zoom-in-down" data-aos-anchor-placement="top-center" className="col-12 col-lg-6 __tel_info">
                    <h1 className='hedTel'>Istalgan vaqtda qo'g'iroq qiling: <a href="tel:+998 88 250 11 01" className='hedTel2'>+998 88 250 11 01</a></h1>
                    <p>{props.hed.info1}</p>
                    <p>{props.hed.info2}</p>
                   
                </div>
                <div data-aos="zoom-in-down" data-aos-anchor-placement="top-center" className="col-12 col-lg-6 __tel_foto">
                <img className='__img' src={telFoto} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Telefon;