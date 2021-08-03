import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../sass/style.scss'
const Tabrik = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <div className='container-fluid text-center bg-img'>
            <div className="row">
                <div className="col-12">
                    <h1 className='tabrik'>So'rovingiz muvofaqiyatli yuborildi</h1>
                    <Link to='/' className="btn third">{props.hed.nav1}</Link>
                </div>
            </div>
        </div>
    );
};

export default Tabrik;