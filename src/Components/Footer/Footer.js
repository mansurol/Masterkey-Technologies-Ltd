import React from 'react';
import './Footer.css'
import ImgOne from '../Img/logo (1).svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faInstagram,
  
      } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <div className='bgColor'>
             <div className='container'>
                   <div className='row pt-5 pb-3'>
                       <div className='col-sm-3 H6style'>
                           <h6>We are social</h6>
                           <p>FOLLOW US</p>
                           <div>
                           <a href="/"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="1x" />
</a>
                           <a href=""
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="1x" />
</a>
<a href="/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="1x" />
</a>


        
                           </div>
                           <img  alt="" src={ImgOne} width="40"height="40"className="d-inline-block align-top" />
.                       </div>

                       <div className='col-sm-3 H6style'>
                       <h6>Links</h6>
                       <p>ADVERTISERS</p>
                       <p>PUBLISHERS</p>
                       <p>INFLUENCERS</p>
                       <p>AD FORMATS</p>


                       </div>

                       <div className='col-sm-3 H6style'>
                       <h6>Documentation</h6>
                       <p>TERMS & CONDITIONS</p>
                       <p>PRAIVACY POLICY</p>
                       <p>CANCELLATION POLICY</p>
                       <p>BLOG</p>

                        </div>


                       <div className='col-sm-3 H6style'>
                       <h6>Support</h6>
                       <p>FAQ</p>
                       <p>MEDIA KIT</p>
                       <p>CONTACT US</p>

                      </div>



                   </div>
             </div>
        </div>
    );
};

export default Footer;