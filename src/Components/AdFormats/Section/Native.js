import React from 'react';
import './Native.css'
import AdImg3 from '../../Img/Ad3.jpg'
const Native = () => {
    return (
        <div>
             <div className='container' >
                 <div className='row'>
                     <div className='col-lg-6 col-sm-6 imgSizing pb-5'>
                         <img src={AdImg3} alt="" />
                     </div>

                     <div className='col-lg-6 col-sm-6 adContent'>
                         <h2 className='mb-5'>Native</h2>
                         <p className='mb-5'>An format with the image and the title,that perfectly fits into the content of the site.
                         Native ads are placed in the most visible areas of the page and,thus this format shows good results and the level of interaction</p>
                         <h6 className='pb-5'>learn more</h6>
                     </div>

                 </div>
         </div>
            
        </div>
    );
};

export default Native;