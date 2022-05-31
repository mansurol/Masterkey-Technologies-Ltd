import React from 'react';
import './Skim.css'
import AdImg4 from '../../Img/Ad4.jpg'
const Skim = () => {
    return (
        <div>
            <div className='container' >
                 <div className='row'>
                     <div className='col-lg-6 col-sm-6 imgSizing pb-5'>
                         <img src={AdImg4} alt="" />
                     </div>

                     <div className='col-lg-6 col-sm-6 adContent'>
                         <h2 className='mb-5'>SKIM</h2>
                         <p className='mb-5'>SKIM" is a link that publisher inserts on a specific side wlwmwnt,and after clicking on it,an advertisement appears to the user.
                         SKIM gives 100% control of sold traffic amount heighr CR to advertisers and CPM rates to piblisher.</p>
                         <h6 className='pb-5'>learn more</h6>
                     </div>

                 </div>
         </div>
            
        </div>
    );
};

export default Skim;