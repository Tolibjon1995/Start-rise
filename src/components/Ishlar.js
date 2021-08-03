import React,{useEffect} from 'react';
import {Link} from 'react-router-dom'
const Ishlar = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
   },[])
    return (
        <div>
      <div className="container">
  <div className="row">
    <div className="col-12">
      <h1 className='text-center'>{props.hed.h2}</h1>
    </div>
    
    <div className="col-12">
    <p><span>{props.hed.logo}</span> {props.hed.p1}
    </p>
    <h2>
      <span>{props.hed.logo}</span> {props.hed.p2}
    </h2>
    <p>
    {props.hed.p3}  
    </p>
    <p>
    {props.hed.p4}
    </p>
    <ol>
      <li>
      {props.hed.li3}
      </li>
      <li>
      {props.hed.li4}
      </li>
      <li>
      {props.hed.li5}
      </li>
    </ol>
    <p>
    {props.hed.p5}
    </p>
    </div>
  </div>
  <div className="row justify-content-center">
    <Link to="/portfolio" className="btn third ">{props.hed.namuna}</Link>
  </div>
</div>

        </div>
    );
};

export default Ishlar;