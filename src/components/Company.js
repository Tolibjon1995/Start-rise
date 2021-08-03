import React,{useEffect} from 'react';
import {Link} from 'react-router-dom'

const Company = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
       },[])
    return (
        <div>
        <div class="container top">
        <div class="row">
            <div class="col-12">
                <h1 class="sas">{props.hed.logo}</h1>
                <p><span>{props.hed.logo}</span> {props.hed.com1}</p>
                <p>{props.hed.com2}</p>
                <p> {props.hed.com3}</p>
                <p>{props.hed.com4}</p>
                <p>{props.hed.com5}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center w-100">
                    <Link to="/register" className="btn btn1 third ">{props.hed.zak}</Link>
                    </div>
        </div>
    </div>
        </div>
    );
};

export default Company;