import React from 'react';
import './Contact.css'
import Img1 from '../Img/Img1 (3).png'
import Img2 from '../Img/Img1 (1).png'
import Img3 from '../Img/Img1 (2).png'


const Contacts = () => {
    return (
        <div className='bgColor'>
            <div className='container'>
                <div>
                    <h2 className='text-center pt-5'>CONTACTS</h2>
                </div>

                <div className='row'>
                 <div className='d-flex justify-content-around mt-5 mb-5'>
                <div>
                <div className='IconBox'>
                   <img src={Img1} alt="" />
                   </div> 
                   <div className='IconBoxContent'>
                       <h2>Notice</h2>
                   </div>
                   <div className='ContentStyleButton'>
                   <a href="/notice">Notice</a>
                  </div>
                </div>

                  <div>
                  <div className='IconBox'>
                   <img src={Img2} alt="" />
                   </div>
                  <div className='IconBoxContent2'>
                  <h2>Text</h2>
                  </div>
                  <div className='ContentStyleButton'>
                      <a href="/text">Massanger</a>
                  </div>
                  </div>

                 <div>
                 <div className='IconBox'>
                   <img src={Img3} alt="" />
                   </div>  
                   <div className='IconBoxContent'>
                   <h2>Recording</h2>
                   </div>
                   <div className='ContentStyleButton'>
                      <a className='mb-3' href="/record">Record</a>
                  </div>
                 </div>
               
                 </div>
                

                </div>

            </div>
        </div>
    );
};

export default Contacts;