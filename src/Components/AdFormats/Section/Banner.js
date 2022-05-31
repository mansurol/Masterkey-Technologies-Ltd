import React from 'react';
import './Banner.css'
import AdImg2 from '../../Img/Ad2.jpg'
const Banner = () => {
    return (
        <div>
            <div className='container' >
                 <div className='row'>
                     <div className='col-lg-6 col-sm-6 imgSizing  mb-5 '>
                         <img src={AdImg2} alt="" />
                     </div>

                     <div className='col-lg-6 col-sm-6 adContent'>
                         <h2 className='mb-5'>BANNER AD</h2>
                         <p className='mb-5'>Choose between the available banner formats.Highly effctive ad for visibility.</p>
                         <h6 className='mb-5'>learn more</h6>
                     </div>

                 </div>
         </div>
        </div>
    );
};

export default Banner;