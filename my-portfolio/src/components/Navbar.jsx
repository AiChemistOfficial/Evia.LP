import React from 'react';
import { useState,useEffect } from 'react';
import logo from '../assets/logo79.png';

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

function MyNavbar() {
    const[activeLink,setActiveLink]=useState('home');
    const[scrolled,setScrolled]=useState(false);
    useEffect(() =>{
        const onScroll = () =>{
            if(window.scrollY>50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () =>window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    } 
  return (
    <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" :""}>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="Logo" style={{ width: '60px' }} />
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() =>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#Services"className={activeLink === 'Services' ? 'active navbar-link' : 'navbar-link'}onClick={() =>onUpdateActiveLink('Services')}>Services</Nav.Link>
            <Nav.Link href="#Prototype"className={activeLink === 'Prototype' ? 'active navbar-link' : 'navbar-link'}onClick={() =>onUpdateActiveLink('Prototype')}>Prototype</Nav.Link>
            <Nav.Link href="#Contact"className={activeLink === 'Contact' ? 'active navbar-link' : 'navbar-link'}onClick={() =>onUpdateActiveLink('Contact')}>Contact Us</Nav.Link>
           
          </Nav>
          <span className="navbar-text">
              <div className="social-icons">
                  <a href="#"></a>
                  <a href=""></a>
                  <a href=""></a>
              </div>
              <button className="vvd" onClick={() => {
                const contactSection = document.getElementById("Contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }} ><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
