import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navs.css'

const navs = () => {
    return (
        <div className='bgColor'>
            <div className="container">
            <Navbar collapseOnSelect expand="lg" >

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link href="#home"><span className='MenubarContent Active'>HOME</span></Nav.Link>
              <Nav.Link href="#advertisers"><span className='MenubarContent'>ADVERTISERS</span></Nav.Link>
              <Nav.Link href="#publisher"><span className='MenubarContent'> PUBLISHERS</span></Nav.Link>
              <Nav.Link href="#influencers"><span className='MenubarContent'>INFLUENCERS</span></Nav.Link>
              <Nav.Link href="#adformats"><span className='MenubarContent'>AD FORMATS</span></Nav.Link>
              <Nav.Link href="#blog"><span className='MenubarContent'>BLOG</span></Nav.Link>
              <Nav.Link href="#contactus"><span className='MenubarContent'>CONTACT US</span></Nav.Link>
              </Nav>
              <Nav>
              <Nav.Link href="#deets" className='StyleLogin'><a href="/login">LOGIN</a> <span className='StyleSingUp'><a href="/logout"> SING UP</a></span></Nav.Link>
      
              </Nav>
               </Navbar.Collapse>

               </Navbar>

            </div>
            </div>
    );
};

export default navs;