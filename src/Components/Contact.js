import React, { useRef } from 'react';
import contact from '../Images/contact.jpg';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_xtag0qm', 'template_xja3lz8', form.current, {
                publicKey: 'n-wkP8cCYVpbbGi5f',
            })
            .then(
                () => {
                    toast.success("Message send successfully!", {
                        position: "top-center",
                    })
                    form.current.reset(); 
                },
                (error) => {
                    toast.error("Something went wrong.Please try again later!", {
                        position: "top-center",
                    })
                },
            );
    };

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div id='contact' className='col-12 col-md-11 mx-auto align-items-center justify-content-center mb-5'>
                    <h1 className='text-white font-weight-bold text-center'>Contact With Me</h1>
                    <div className='d-flex flex-column flex-md-row mt-5 justify-content-between'>
                        {/* Contact Info */}
                        <div className='col-12 col-md-4 rounded result mx-auto p-3 h-100'>
                            <img src={contact} alt='Contact' className='w-100 h-50 rounded' />
                            <h4 className='text-white font-weight-bold mt-2'>Muhammad Shakeel</h4>
                            <p>Full Stack Developer & Data Scientist</p>
                            <p className='text-white text-13'>
                                I use animation as a third dimension to simplify experiences and guide through each interaction.
                                I'm not adding motion just to spruce things up, but doing it in ways that enhance user experience.
                            </p>
                            <h6>Phone: <span className='text-white'>+92 320-7521951</span></h6>
                            <h6>Email: <span className='text-white'>shakeel7521951@gmail.com</span></h6>
                            <div className='my-3'>
                                <h6 className='text-white'>FIND ME ON</h6>
                                <div className='d-flex gap-3 mt-3'>
                                    <a href="https://web.facebook.com/profile.php?id=100083701840637" target="_blank" rel="noopener noreferrer" className="social-icon"> <FaFacebookF /> </a>
                                    <a href='https://www.instagram.com/shakeel_227/' target='_blank' rel='noopener noreferrer' className='social-icon'><FaInstagram /></a>
                                    <a href='https://pk.linkedin.com/in/muhammad-shakeel-b048b0301' target='_blank' rel='noopener noreferrer' className='social-icon'><FaLinkedinIn /></a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form ref={form} onSubmit={sendEmail} className='col-12 col-md-7 rounded mx-auto contact result p-4'>
                            <div className='d-flex flex-column flex-md-row w-100 gap-4 gap-md-5'>
                                <div className='w-100 w-md-50'>
                                    <p className='mb-2'>YOUR NAME</p>
                                    <input type='text' name='to_name' required className='form-control' placeholder='Enter your name' aria-label="Your Name" />
                                </div>
                                <div className='w-100 w-md-50'>
                                    <p className='mb-2'>PHONE NUMBER</p>
                                    <input type='text' name='phone' required className='form-control' placeholder='Enter your phone number' aria-label="Phone Number" />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <p className='mb-2'>EMAIL</p>
                                <input type='email' name='from_name' required className='form-control' placeholder='Enter your email' aria-label="Email" />
                            </div>
                            <div className='mt-4'>
                                <p className='mb-2'>SUBJECT</p>
                                <input type='text' name='subject' required className='form-control' placeholder='Enter the subject' aria-label="Subject" />
                            </div>
                            <div className='mt-4'>
                                <p className='mb-2'>MESSAGE</p>
                                <textarea name='message' required className='form-control' placeholder='Enter your message' style={{ minHeight: "190px" }} aria-label="Message"></textarea>
                            </div>
                            <div className='text-center mt-4'>
                                <button type='submit' value="Send" className='btn btn-dark w-100 p-2'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Contact;
