

import img1 from '../images/portfolioFoto/photo_2021-06-19_11-24-03.jpg'
import img2 from'../images/portfolioFoto/photo_2021-06-19_11-24-06.jpg'
import img3 from'../images/portfolioFoto/photo_2021-06-19_11-24-09.jpg'
import img4 from'../images/portfolioFoto/photo_2021-06-19_11-24-12.jpg'
import img5 from'../images/portfolioFoto/photo_2021-06-19_11-24-15.jpg'
import img6 from'../images/portfolioFoto/photo_2021-06-19_11-24-19.jpg'
import img7 from'../images/portfolioFoto/photo_2021-06-19_11-24-23.jpg'
import img8 from'../images/portfolioFoto/photo_2021-06-19_11-24-27.jpg'
import img9 from'../images/portfolioFoto/photo_2021-06-19_11-24-32.jpg'
import img10 from'../images/portfolioFoto/photo_2021-06-19_11-24-35.jpg'
import img11 from'../images/portfolioFoto/photo_2021-06-19_11-24-38.jpg'
import img12 from'../images/portfolioFoto/photo_2021-06-19_11-24-40.jpg'
import img13 from'../images/portfolioFoto/photo_2021-06-19_11-24-46.jpg'
import img14 from'../images/portfolioFoto/photo_2021-06-19_11-24-51.jpg'
import img15 from'../images/portfolioFoto/photo_2021-06-19_11-25-01.jpg'
import img16 from'../images/portfolioFoto/photo_2021-06-19_11-25-06.jpg'
import img17 from'../images/portfolioFoto/photo_2021-06-19_11-25-12.jpg'
import img18 from'../images/portfolioFoto/photo_2021-06-19_11-25-19.jpg'
import img19 from'../images/portfolioFoto/photo_2021-06-19_11-25-23.jpg'
import img20 from'../images/portfolioFoto/photo_2021-06-19_11-25-26.jpg'
import img21 from'../images/portfolioFoto/photo_2021-06-19_11-25-41.jpg'
import img22 from'../images/portfolioFoto/photo_2021-06-19_11-25-52.jpg'
import img23 from'../images/portfolioFoto/photo_2021-06-19_11-26-31.jpg'
import img24 from'../images/portfolioFoto/photo_2021-06-19_11-26-57.jpg'
import img25 from'../images/portfolioFoto/photo_2021-06-19_11-27-02.jpg'
import img26 from'../images/portfolioFoto/photo_2021-06-19_11-27-06.jpg'
import img27 from'../images/portfolioFoto/photo_2021-06-19_11-27-09.jpg'
import img28 from'../images/portfolioFoto/photo_2021-06-19_11-27-12.jpg'
import img29 from'../images/portfolioFoto/photo_2021-06-19_11-27-14.jpg'
import img30 from'../images/portfolioFoto/photo_2021-06-19_11-27-17.jpg'
import React, { useState, useEffect } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import '../sass/portfolio.scss'
const fotos = [
  { id: 1, foto: img1},
  { id: 2, foto: img2},
  { id: 3, foto: img3},
  { id: 4, foto: img4},
  { id: 5, foto: img5},
  { id: 6, foto: img6},
  { id: 7, foto: img7},
  { id: 8, foto: img8},
  { id: 9, foto: img9},
  { id: 10, foto: img10},
  { id: 11, foto: img11},
  { id: 12, foto: img12},
  { id: 13, foto: img13},
  { id: 14, foto: img14},
  { id: 15, foto: img15},
  { id: 16, foto: img16},
  { id: 17, foto: img17},
  { id: 18, foto: img18},
  { id: 19, foto: img19},
  { id: 20, foto: img20},
  { id: 21, foto: img21},
  { id: 22, foto: img22},
  { id: 23, foto: img23},
  { id: 24, foto: img24},
  { id: 25, foto: img25},
  { id: 26, foto: img26},
  { id: 27, foto: img27},
  { id: 28, foto: img28},
  { id: 29, foto: img29},
  { id: 30, foto: img30},

  
]
  

const Portfolio = () => {
  const [open, setopen] = useState()
  const [mod, setmod] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
   },[])
  const toggle = (i) => {
    setmod(!mod);
    setopen(i)
  }
  
 
  
  return (
    <div>
    <div className='container-fluid mt-5'>
    <div className="row">
      {
        fotos.map((item) => {
          return (
            <div className="col-12 col-md-6 col-lg-3 mt-3">
            <div className="card w-100 h-100 bass">
                <div className="card-body p-0">
                  <img src={item.foto} onClick={() => { toggle(item.foto) }} alt="" />
                </div>
            </div>
            </div>
          )
        })
      }
      
    </div>
    <Modal isOpen={mod} toggle={toggle} >
      <ModalBody className='modal-open'>
        <img src={open} className='w-100 h-100' onClick={toggle} alt="" />
      </ModalBody>
     
    </Modal>
  </div>
    </div>
  );
};

export default Portfolio;