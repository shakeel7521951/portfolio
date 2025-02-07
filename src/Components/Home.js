import React from 'react';
import './style.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaInstagram , FaLinkedinIn, FaReact, FaBootstrap, FaNodeJs, FaWordpress } from "react-icons/fa";


const Home = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
        Cursor,
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 15,
        delaySpeed: 2000
    });

    return (
        <div className='container'>
            <div className='row'>
                <div id='home' className='col-12 col-md-10 mx-auto my-3 py-md-5 pt-2 pb-4 d-flex flex-column gap-4 flex-md-row'>
                    <div className='col-12 mt-md-4 d-flex flex-column gap-md-4 order-1 order-md-0'>
                        <div className='d-flex flex-column gap-1'>
                            <h6 className='font-weight-normal text-white text-center'>WELCOME TO MY WORLD</h6>
                            <h1 className='font-weight-bold text-white text-center'>Hi, I'm <span className='textRed'>Muhammad Shakeel</span></h1>
                            <h3 className='font-weight-bold text-white text-center'>a <span>{text}</span><Cursor cursorBlinking="false" cursorStyle="|" cursorColor='#ff014f' /></h3>
                            <p className='text-center '>I use animation as a third dimension by which to simplify experiences and kuiding throw each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that.</p>
                        </div>
                        <div className='col-12 col-md-7 mx-auto d-flex justify-content-between'>
                            <div>
                                <h6 className='font-weight-normal py-1 text-center'>FIND ME IN</h6>
                                <div className='d-flex gap-2 gap-md-4 align-items-center text-center'>
                                    <a href="https://web.facebook.com/profile.php?id=100083701840637" target="_blank" rel="noopener noreferrer" className="social-icon"> <FaFacebookF /> </a>
                                    <a href='https://www.instagram.com/shakeel.developer.pro' target='_blank' rel='noopener noreferrer' className='social-icon'><FaInstagram  /></a>
                                    <a href='https://pk.linkedin.com/in/muhammad-shakeel-b048b0301' target='_blank' rel='noopener noreferrer' className='social-icon'><FaLinkedinIn  /></a>
                                </div>
                            </div>
                            <div>
                                <h6 className='font-weight-normal py-1 text-center'>BEST SKILL ON</h6>
                                <div className='d-flex gap-2 gap-md-4 align-items-center text-center'>
                                    <span className='social-icon' onClick={()=>window.location.href="/web-development"}><FaReact /></span>
                                    <span className='social-icon' onClick={()=>window.location.href="/web-development"}><FaBootstrap /></span>
                                    <span className='social-icon' onClick={()=>window.location.href="/web-development"}><FaNodeJs /></span>
                                    <span className='social-icon' onClick={()=>window.location.href="/web-development"}><FaWordpress /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home