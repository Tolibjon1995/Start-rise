import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import dilya from '../images/jamoa/dilya.jpg'
import zilola from '../images/jamoa/Zilola.jpg'
import farrux from '../images/jamoa/Farrux.jpg'
import umarjon from '../images/jamoa/Umarjon.jpg'
import bunyodbek from '../images/jamoa/bunyodbek.jpg'
import xurshid from '../images/jamoa/Xurshid.jpg'
import bekzod from '../images/jamoa/Bekzod.jpg'
import anvar from '../images/jamoa/anvar.jpg'
import foziljon from '../images/jamoa/foziljon.jpg'
import tolibjon from '../images/jamoa/tolibjon.jpg'

const responsive = {
  0: { items: 1 },
  576: { items: 2 },
  992: { items: 3 },
  1200: { items: 4 },
};

const items = [
  <div className='item px-2' data-value='1'>
    <div className=' text-center'>
      <div className='circl'>
        <div className='circl2'>
          <img src='' alt='' />
        </div>
      </div>
      <h5>Sadikov Dilshod</h5>
      <p>Full Stack developer</p>
    </div>
  </div>,
  <div className='item px-2' data-value='2'>
    <div className=' text-center'>
      <div className='circl'>
        <div className='circl2'>
          <img src={zilola} alt='' />
        </div>
      </div>
      <h5>Mahmudova Zilola</h5>
      <p>Menejer</p>
    </div>
  </div>,

  <div className='item px-2' data-value='4'>
    <div className=' text-center'>
      <div className='circl'>
        <div className='circl2'>
          <img src={dilya} alt='' />
        </div>
      </div>
      <h5>Karayeva Dilya</h5>
      <p>Menejer</p>
    </div>
  </div>,
    
  <div className='item px-2' data-value='4'>
    <div className=' text-center'>
      <div className='circl'>
        <div className='circl2'>
          <img src={xurshid} alt='' />
        </div>
      </div>
      <h5>Mo'minov Xurshidbek</h5>
      <p>Backend developer</p>
    </div>
    </div>,
  
  <div className='item px-2' data-value='4'>
    <div className=' text-center'>
      <div className='circl'>
        <div className='circl2'>
          <img src={foziljon} alt='' />
        </div>
      </div>
      <h5>Zayniddinov Foziljon</h5>
      <p>Frontend developer</p>
    </div>
    </div>,
  
  <div className='item px-2' data-value='4'>
    <div className=' text-center'>
      <div className='circl'>
        <div className='circl2'>
          <img src={anvar} alt='' />
        </div>
      </div>
      <h5>Hujamov Anvarjon</h5>
      <p>Frontend developer</p>
    </div>
  </div>,
  
  <div className='item px-2' data-value='4'>
    <div className=' text-center'>
      <div className='circl'>
        <div className='circl2'>
          <img src={bekzod} alt='' />
        </div>
      </div>
      <h5>Xojiyev Bekzod</h5>
      <p>Frontend developer</p>
    </div>
  </div>,

  <div className='item px-2' data-value='3'>
    <div className=' text-center'>
      <div className='circl'>
        <div className='circl2'>
          <img src={tolibjon} alt='' />
        </div>
      </div>
      <h5>Tursunov Tolibjon</h5>
      <p>Frontend developer</p>
    </div>
  </div>,

  <div className='item px-2' data-value='4'>
    <div className=' text-center'>
      <div className='circl'>
        <div className='circl2'>
          <img src={bunyodbek} alt='' />
        </div>
      </div>
      <h5>Sherazimov Bunyodbek</h5>
      <p>Frontend developer</p>
    </div>
  </div>,
    
  <div className='item px-2' data-value='4'>
    <div className=' text-center'>
      <div className='circl'>
        <div className='circl2'>
          <img src={farrux} alt='' />
        </div>
      </div>
      <h5>Turg'unpo'latov Farrux</h5>
      <p>Frontend developer</p>
    </div>
  </div>,
  
  <div className='item px-2' data-value='4'>
    <div className=' text-center'>
      <div className='circl'>
        <div className='circl2'>
          <img src={umarjon} alt='' />
        </div>
      </div>
      <h5>Abdulvohidov Umarjon</h5>
      <p>Grafik dizayner</p>
    </div>
  </div>,
];

const Hodimlar = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    responsive={responsive}
    controlsStrategy='alternate'
    autoPlay={true}
    disableDotsControls={true}
    disableButtonsControls={true}
    infinite={true}
    autoPlayStrategy='defoult'
    animationDuration={5000}
  />
);

export default Hodimlar;
