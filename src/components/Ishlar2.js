import React,{useEffect} from 'react';
import {Link} from 'react-router-dom'
const Ishlar2 = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
   },[])
  return (
    
        <div>
    <div className="container">
  <div className="row">
    <div className="col-12">
      <h1 className='text-center'>{props.hed.h1}</h1>
    </div>
    <p><span>{props.hed.logo}</span> {props.hed.par1}
    </p>
    <h2>
      <span>{props.hed.logo}</span> {props.hed.par2}
    </h2>
    <p className=" w-100">
    {props.hed.par3}
    </p>
    <br />
    <ol>
      <li>
      {props.hed.li1}
      </li>
      <li>
      {props.hed.li2}
      </li>
    </ol>
    <p>
    {props.hed.par4}
    </p>
  </div>
  <div className="row justify-content-center">
    <Link to="/portfolio" className="btn third ">{props.hed.namuna}</Link>
  </div>
</div>

        </div>
    );
};

export default Ishlar2;