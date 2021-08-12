import React, { useEffect } from 'react';
import '../sass/kurs_sloy.scss';


const Kurslar = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='container __kurslar_foto'>
    <h1 className="hed text-center">{props.hed.grafik}</h1>
      <div className="row justify-content-center w-100">
      
        <div data-aos="fade-down-right" data-aos-anchor-placement="top-center" class="flip col-12 col-md-6 col-lg-3 mt-4">
          <div class="front" >
            <img src="./images/kurslar/figma.png" alt='' />
            <h6>Figma</h6>
          </div>
          <div class="back">
            <h4>Figmada vebsayt dizaynlarini tayyorlash</h4>
            <p>2 hafta</p>
          </div>
        </div>

        <div data-aos="zoom-in-down" data-aos-anchor-placement="top-center" class="flip col-12 col-md-6 col-lg-3 mt-4">
          <div class="front" >
            <img src="./images/kurslar/Icon Photoshop 2019.png" alt='' />
            <h6>Photoshop</h6>
          </div>
          <div class="back">
            <h4>Photoshop vebsayt dizaynlarini tayyorlash</h4>
            <p>2 oy</p>
          </div>
        </div>

        <div data-aos="zoom-in-down" data-aos-anchor-placement="top-center" class="flip col-12 col-md-6 col-lg-3 mt-4">
          <div class="front" >
            <img src="/images/kurslar/3dmx.jpg" alt='' />
            <h6>3D Max</h6>
          </div>
          <div class="back">
            <h4>3d maxda interyer dizaynlarini tayyorlash</h4>
            <p>3 oy</p>
          </div>
        </div>

        <div  data-aos="fade-down-left" data-aos-anchor-placement="top-center" class="flip col-12 col-md-6 col-lg-3 mt-4">
          <div class="front" >
            <img src="./images/kurslar/Ai_Logo_v2.png" alt='' />
            <h6>Adobe I</h6>
          </div>
          <div class="back">
            <h4>Illisrtatorda dizaynlar tayyorlash</h4>
            <p>1 oy</p>
          </div>
        </div>


      </div>
      <h1 className='las'>{props.hed.veb}</h1>
      <div className="row justify-content-center w-100">
      
        <div data-aos="fade-down-right" data-aos-anchor-placement="top-center" class="flip flip-vertical col-12 col-md-6 col-lg-4 mt-4">
          <div class="front" >
            <img src="./images/kurslar/600px-HTML5_Badge 2.png" alt='' />
            <h6>Html</h6>
          </div>
          <div class="back">
            <h4>HTML yordamida vebsayt yaratish</h4>
            <p>1 hafta</p>
          </div>
        </div>
        
        <div data-aos="zoom-in-down" data-aos-anchor-placement="top-center"  class="flip flip-vertical col-12 col-md-6 col-lg-4 mt-4">
          <div class="front">
            <img src="./images/kurslar/css-3-logo-png-picture-364523-css-3-logo-png-css-logo-png-1600_1600 2.png" alt='' />
            <h6>Css</h6>
          </div>
          <div class="back">
            <h4>CSS yordamida vebsaytga still berish</h4>
            <p>1 oy</p>
          </div>
        </div>
        
        <div data-aos="fade-down-left" data-aos-anchor-placement="top-center" class="flip flip-vertical col-12 col-md-6 col-lg-4 mt-4">
          <div class="front" >
            <img src="./images/kurslar/sass-1-logo 1.png" alt='' />
            <h6>Sass</h6>
          </div>
          <div class="back">
            <h4>SASS yordamida vebsaytga still berish</h4>
            <p>1 hafta</p>
          </div>
        </div>

        <div data-aos="fade-down-right" data-aos-anchor-placement="top-center" class="flip flip-vertical col-12 col-md-6 col-lg-4 mt-4">
          <div class="front" >
            <img src="./images/kurslar/logo-javascript-png-transparent-logo-javascriptpng-images-pluspng-javascript-png-587_330 1.png" alt='' />
            <h6>Javascipt</h6>
          </div>
          <div class="back">
            <h4>Javascript yordamida vebsatni dinamiklashtirish</h4>
            <p>2 oy</p>
          </div>
        </div>

        <div data-aos="zoom-in-down" data-aos-anchor-placement="top-center" class="flip flip-vertical col-12 col-md-6 col-lg-4 mt-4">
          <div class="front" >
            <img src="./images/kurslar/1280px-React-icon 2.png" alt='' />
            <h6>React</h6>
          </div>
          <div class="back">
            <h4>React.js yordamida single page applicationlar yaratish</h4>
            <p>1 oy</p>
          </div>
        </div>

        <div  data-aos="fade-down-left" data-aos-anchor-placement="top-center" class="flip flip-vertical col-12 col-md-6 col-lg-4 mt-4">
          <div class="front" >
            <img src="./images/kurslar/1184px-Vue.js_Logo_2 1.png" alt='' />
            <h6>Vue</h6>
          </div>
          <div class="back">
            <h4>Vue.js yordamida single page applicationlar yaratish</h4>
            <p>1 oy</p>
          </div>
        </div>



      </div>
      <h1 className='las'>{props.hed.bac}</h1>
      <div className="row justify-content-center w-100">
 
        <div data-aos="fade-down-right" data-aos-anchor-placement="top-center" class="flip flip-vertical col-12 col-md-6 col-lg-4 mt-4">
          <div class="front" >
            <img src="./images/kurslar/PHP-Logo 1.png" alt='' />
            <h6>PHP</h6>
          </div>
          <div class="back">
            <h4>PHP yordamida saytlarning back-end qismini tayyorlash</h4>
            <p>1 oy</p>
          </div>
        </div>
        
        <div data-aos="zoom-in-down" data-aos-anchor-placement="top-center"  class="flip flip-vertical col-12 col-md-6 col-lg-4 mt-4">
          <div class="front">
            <img src="./images/kurslar/LaravelLogo 1.png" alt='' />
            <h6>Laravel</h6>
          </div>
          <div class="back">
            <h4>Laravel yordamida saytlarning back-end qismini tayyorlash</h4>
            <p>2 oy</p>
          </div>
        </div>
        
        <div data-aos="fade-down-left" data-aos-anchor-placement="top-center" class="flip flip-vertical col-12 col-md-6 col-lg-4 mt-4">
          <div class="front" >
            <img src="./images/kurslar/5848152fcef1014c0b5e4967 1.png" alt='' />
            <h6>Python </h6>
          </div>
          <div class="back">
            <h4>Python yordamida saytlarning back-end qismini tayyorlash</h4>
            <p>1 oy</p>
          </div>
        </div>

        <div data-aos="fade-down-right" data-aos-anchor-placement="top-center" class="flip flip-vertical col-12 col-md-6 col-lg-4 mt-4">
          <div class="front" >
            <img src="./images/kurslar/django-logo 2.png" alt='' />
            <h6>Django</h6>
          </div>
          <div class="back">
            <h4>Django yordamida saytlarning back-end qismini tayyorlash</h4>
            <p>2 oy</p>
          </div>
        </div>

        <div data-aos="zoom-in-down" data-aos-anchor-placement="top-center"  class="flip flip-vertical col-12 col-md-6 col-lg-4 mt-4">
          <div class="front" >
            <img src="./images/kurslar/nodejs 1.png" alt='' />
            <h6>Node js</h6>
          </div>
          <div class="back">
            <h4>Node.js yordamida saytlarning back-end qismini tayyorlash</h4>
            <p>1 oy</p>
          </div>
        </div>

        <div  data-aos="fade-down-left" data-aos-anchor-placement="top-center" class="flip flip-vertical col-12 col-md-6 col-lg-4 mt-4">
          <div class="front" >
            <img src="./images/kurslar/mongodb 1.png" alt='' />
            <h6>Mongo DB</h6>
          </div>
          <div class="back">
            <h4>Mongo DB yordamida malumotlar bazasi bilan ishlah</h4>
            <p>1 oy</p>
          </div>
        </div>



      </div>

    </div>
  );
};

export default Kurslar;