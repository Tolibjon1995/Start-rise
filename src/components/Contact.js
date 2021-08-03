import React, { useEffect } from 'react';
import { AvForm, AvInput } from 'availity-reactstrap-validation'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import '../sass/portfolio.scss'

const Contact = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    
    const history = useHistory()
    const nimadir = (e, errors, values) => {
        axios.post('https://60a359a57c6e8b0017e26bb4.mockapi.io/kom/shop', values)
          .then((res) => {
          })
        e.target.email.value = '';
        e.target.savol.value = '';
        e.target.tel.value = '';
        history.push('/tabrik')
      }
    
    return (
        <div className="container">
            <div className="row">
            <div className="col text-center">
                <h1>{props.hed.aloqa}</h1>
                </div>
            </div>
            <div className="row">
                
                <div className="col-12 col-lg-6 __nima">
                    <p>{props.hed.info1}</p>
                    <p>{props.hed.info2}</p>
                </div>
            <div className="col-12 col-lg-6">
                    <AvForm onSubmit={nimadir} className="form form2">
                        <label htmlFor="email">{props.hed.email}</label>
                        <AvInput type="email" id='email' name="email" className="form-control" required />
                        <label htmlFor="tel" className='mt-3'>{props.hed.tel}</label>
                        <AvInput type="text" name="tel" id='tel' className="form-control " placeholder='+998 -- --- -- --' required/>
                        <label htmlFor="savol" className='mt-3'>{props.hed.savol2}</label>
                <AvInput name="savol" id='savol' type='textarea' className="form-control" cols="30" rows="10" required></AvInput>
                                    
                <button type="submit" className="btn third">{props.hed.yuborish}</button>
              </AvForm>
            </div>
            </div>
        </div>
    );
};

export default Contact;