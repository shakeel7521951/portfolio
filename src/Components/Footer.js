import React from 'react';
import footer from '../Images/footer.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();


    const handleResumeClick = () => {
        if (location.pathname !== "/") {
          navigate("/"); 
        }
      };

    return (
        <div className='container-fluid bg-dark text-white py-4'>
            <div className='row'>
                <div className='col-12 col-md-11 mx-auto d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-start pt-4'>
                    <div className='col-12 col-md-3 mt-md-4 me-md-4 mx-auto text-center'>
                        <div className='d-flex flex-column align-items-center'>
                            <img src={footer} alt='Footer' className='footer-image' />
                            <p className='mt-3 font-weight-bold'>Muhammad Shakeel</p>
                        </div>
                        <div className='d-flex gap-3 justify-content-center align-items-center'>
                            <a href="https://web.facebook.com/profile.php?id=100083701840637" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaFacebookF />
                            </a>
                            <a href='https://www.instagram.com/shakeel_227/' target='_blank' rel='noopener noreferrer' className='social-icon '>
                                <FaInstagram />
                            </a>
                            <a href='https://pk.linkedin.com/in/muhammad-shakeel-b048b0301' target='_blank' rel='noopener noreferrer' className='social-icon'>
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    <div className='col-12 col-md-3 mx-auto text-center text-md-start'>
                        <h5 className='font-weight-bold textRed my-3 ms-md-2'>Quick Links</h5>
                        <ul className='d-flex flex-column footer mx-auto gap-2 ms-md-3 '>
                            <li><a href="#home" onClick={handleResumeClick}>About</a></li>
                            <li><a href="#resume" onClick={handleResumeClick} >Resume</a></li>
                            <li><a href="#services" onClick={handleResumeClick}>Services</a></li>
                            <li><a href="#projects" onClick={handleResumeClick}>Projects</a></li>
                            <li><a href="#contact" onClick={handleResumeClick}>Contact</a></li>
                        </ul>
                    </div>

                    <div className='col-12 col-md-3 mx-auto text-center text-md-start'>
                        <h5 className='font-weight-bold textRed my-3'>Services</h5>
                        <ul className='d-flex flex-column gap-2 mx-auto'>
                            <li>Web Development</li>
                            <li>WordPress Development</li>
                            <li>Data Science</li>
                            <li>UI/UX Design</li>
                            <li>SEO Services</li>
                        </ul>
                    </div>

                    <div className='col-12 col-md-3 text-center text-md-start'>
                        <h5 className='font-weight-bold textRed my-3 '>Contact Info</h5>
                        <p>Phone: +92 320-7521951</p>
                        <p>Email: shakeel7521951@gmail.com</p>
                        <p>Location: Mailsi, Pakistan</p>
                    </div>
                </div>
            </div>
            <hr />
            <p className='text-center mb-0 pb-0 footer-text'>@ {new Date().getFullYear()} All rights reserved by Muhammad Shakeel</p>
        </div>
    );
}

export default Footer;
