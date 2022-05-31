import React from 'react';
import './OnlineMarket.css'
const OnlineMarket = () => {
    return (
        <div className='bgColor2 '>
            <div className='container '>
                <div className='HeaderOnline '>
                      <div className='pt-5'>
                      <h2 className='text-center '>Market Place</h2>
                      </div>
                </div>
       
                    <div  className='d-flex justify-content-between'>
                    <div className=' mt-5 mb-5'>
                         <div className='Circle'>
                            <div className='CircleContent'>
                            <h2>1 BN+</h2>
                             <p>Daily Impression</p>
                            </div>
                         </div>
                    </div>

                    <div className='mt-5 mb-5'>
                         <div className='Circle2'>
                         <div className='CircleContent2'>
                            <h2>$500K+ </h2>
                             <p>Paid</p>
                            </div>
                          
                         </div>
                    </div>

                    <div className=' mt-5 mb-5'>
                         <div className='Circle3'>
                         <div className='CircleContent3'>
                            <h2>8K+ </h2>
                             <p>Global Publishers</p>
                            </div>
                         </div>
                    </div>
                    </div>

                </div>

        
            
        </div>
    );
};

export default OnlineMarket;