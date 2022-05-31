import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import ImgOne from '../Img/logo (1).svg'
import Nav from 'react-bootstrap/Nav'
import './header.css'
const header = () => {
    return (
        <div className="bgColor">
        <Navbar>
            <div className="container">

        
          <Navbar.Brand href="#home">
            <img  alt="" src={ImgOne} width="40"height="40"className="d-inline-block align-top" />{' '}Masterkey
          </Navbar.Brand>
          <Nav className="">
        <Nav.Link href="#language"><span className='BNstyle'>BN</span> / <span className='BNstyle'>EN</span></Nav.Link>
        
        
      </Nav>
          </div>
   
      </Navbar>
      </div>
    );
};

export default header;