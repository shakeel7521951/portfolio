import React, { useState } from 'react';
import './style.css';
import logo from '../Images/logo.png';
import { navLinkData } from '../constants';
import { Link } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (to) => {
    if (location.pathname !== '/') {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) {
          window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(to);
      if (element) {
        window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
      }
    }
    setIsOpen(false); 
  };

  return (
    <div className='container-fluid sticky-top bgColor header'>
      <div className='row'>
        <div className='col-12 col-md-11 mx-auto textColor p-2 justify-content-between d-block d-md-flex'>
          <div className='d-flex align-items-center justify-content-between'>
              <img 
                src={logo} 
                onClick={() => window.location.href = "/"} 
                alt='Profile logo' 
                className='cursor-pointer' 
                style={{ height: '50px', width: "90px" }} 
              />
            <button onClick={() => setIsOpen(!isOpen)} className='navbar-toggler d-md-none mt-2 fs-1 me-3'>
              {isOpen ? '✖' : '☰'}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className={`d-none d-md-flex gap-5 align-items-center my-auto`}>
            {navLinkData.map((navlink) => (
              <li key={navlink.id}>
                <Link
                  onClick={() => handleClick(navlink.link)}
                  to={navlink.link}
                  spy={true}
                  activeClass='active'
                  duration={500}
                  offset={-30}
                >
                  {navlink.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <ul className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            {navLinkData.map((navlink) => (
              <li key={navlink.id}>
                <Link
                  onClick={() => handleClick(navlink.link)}
                  to={navlink.link}
                  spy={true}
                  activeClass='active'
                  duration={500}
                  offset={-30}
                >
                  {navlink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
