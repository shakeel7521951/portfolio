import React from 'react';
import './style.css';
import logo from '../Images/logo.png';
import { navLinkData } from '../constants';
import { Link } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
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
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 col-md-11 mx-auto textColor p-2 border-bottom sticky-navbar'>
          <div className='d-flex align-items-center justify-content-between'>
            <img src={logo} alt='Profile logo' className='cursor-pointer' style={{ height: '50px', width: "90px" }} />
            <ul className='d-flex gap-5 align-items-center my-auto'>
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
    </div>
  );
};

export default Navbar;
