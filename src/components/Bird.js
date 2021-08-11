import React, {useEffect} from 'react';
import '../sass/bird.css';
const Bird = () => {
    useEffect(() => {
        const wingLeft = document.querySelector(" .bird_wing_left");
        const wingRight = document.querySelector(" .bird_wing_right");
        
        window.addEventListener('scroll', ()=> {
            wingLeft.classList.add('a-wingLeft');
            wingRight.classList.add('a-wingRight');
        })
        
        let isScrolling;
        
        window.addEventListener('scroll',()=> {
        
            window.clearTimeout( isScrolling );
        
            isScrolling = setTimeout(function() {
        
                wingLeft.classList.remove('a-wingLeft');
            wingRight.classList.remove('a-wingRight');
        
            }, 2500);
        
        }, false);
    }, [])
    return (
        
             <div id="main">
            <div className="bird">
                <div className="bird_body">
                  <div className="bird_head"></div>
                  <div className="bird_wing_left">
                    <div className="bird_wing_left_top"></div>
                  </div>
                  <div className="bird_wing_right">
                    <div className="bird_wing_right_top"></div>
                  </div>
                  <div className="bird_tail_left"></div>
                  <div className="bird_tail_right"></div>
                </div>
              </div>
        </div>
    );
};

export default Bird;