import React from 'react';
import './AdFormat.css'
import { Link } from "react-router-dom";
const Adformat = () => {
    return (
        <div className=''>
            <div className='container'>
                <div className='row '>
                      <div className='d-flex justify-content-between'>
                      <div className='AdStyle  mt-5 mb-5'>
                        <a as={Link} href="/pop">POP-UNDER</a>
                   </div>
                   <div className='AdStyle  mt-5 mb-5'>
                   <a as={Link}  href="/ad">BANNER AD</a>  
                   </div>
                   <div className='AdStyle  mt-5 mb-5'>
                   <a as={Link}  href="/native">NATIVE</a> 
                   </div>
                   <div className='AdStyle  mt-5 mb-5'>
                   <a as={Link}  href="/skim">SKIM</a> 
                   </div>
                      </div>
                </div>

            </div>
            
        </div>
    );
};

export default Adformat;