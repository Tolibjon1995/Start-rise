import axios from 'axios';
import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import { AvForm, AvInput,AvField } from 'availity-reactstrap-validation'
const Register = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const history = useHistory()
  const nimadir = (e, errors, values) => {
    axios.post('https://60a359a57c6e8b0017e26bb4.mockapi.io/kom/shop', values)
      .then((res) => {
       
       
      })
    e.target.ism.value = '';
    e.target.fam.value = '';
    e.target.tel.value = '';
    e.target.kurs.value = '';
    history.push('/tabrik')
  }

    return (
        <div>
        <div className="container">
          <div className="row">
            <div className="col">
            <h1 className='text-center'>{props.hed.h3}</h1>
            </div>
          </div>
  <div className="row d-flex align-items-center justify-content-center">
    <div className="col-12 col-md-8 col-lg-6">
      <AvForm onSubmit={nimadir}>
        <label htmlFor="ism" className="mt-3">{props.hed.ism}</label>
        <AvInput type="text" id="ism" name='ism' className=" form-control" required/>
                
        <label htmlFor="fam" className="mt-3">{props.hed.fam}</label>
        <AvInput type="text" id="fam" name='fam' className=" form-control" required/>
                
        <label htmlFor="tel" className="mt-3">{props.hed.tel}</label>
        <AvInput type="text" id="tel" name='tel' placeholder='+998 -- --- -- --' className=" form-control" required/>
                
                
        <label htmlFor="kurs" className="mt-3">{props.hed.tanla}</label>
        <AvField name='kurs' type='select' id='kurs' required className="form-control">
          <option value="grafik">{props.hed.op1}</option>
          <option value="3d">{props.hed.op2}</option>
          <option value="front">{props.hed.op3}</option>
          <option value="backent">{props.hed.op4}</option>
        </AvField>
        <button type="submit" className="btn third">{props.hed.yuborish}</button>
      </AvForm>
    </div>
  </div>
</div>

        </div>
    );
};

export default Register;