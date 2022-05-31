import React from 'react';
import './PopUder.css'
import AdImg from '../../Img/Ad1.jpg'
const PopUnder = () => {
    return (
    <div>
         <div className='container' >
                 <div className='row'>
                     <div className='col-lg-6 col-sm-6 imgSizing pb-5'>
                         <img src={AdImg} alt="" />
                     </div>

                     <div className='col-lg-6 col-sm-6 adContent'>
                         <h2 className='mb-5'>POP-UNDER</h2>
                         <p className='mb-5'>This is one of the most popular ads.Afert user's click,this ad opens landing page in behind.so,the liser expenrience is mot hempered much.</p>
                         <h6 className='pb-5'>learn more</h6>
                     </div>

                 </div>
         </div>
    </div>
    );
};

export default PopUnder;