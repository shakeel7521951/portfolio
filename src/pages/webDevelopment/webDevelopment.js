import React from 'react';
import './WebDevelopmentPage.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';
import { FaArrowRightLong } from 'react-icons/fa6';
import { CiGlobe } from 'react-icons/ci';

const WebDevelopmentPage = () => {
  const webDevelopmentSkills = [
    { name: 'HTML', percentage: '99%', level: 'Expert', icon: <FaHtml5 aria-label="HTML5" /> },
    { name: 'CSS', percentage: '92%', level: 'Advanced', icon: <FaCss3Alt aria-label="CSS3" /> },
    { name: 'JavaScript', percentage: '90%', level: 'Proficient', icon: <FaJs aria-label="JavaScript" /> },
    { name: 'Bootstrap', percentage: '99%', level: 'Expert', icon: <BsBootstrap aria-label="Bootstrap" /> },
  ];

  const frameWorks = [
    { name: 'React.js', percentage: '96%', level: 'Expert', icon: <FaReact aria-label="React.js" /> },
    { name: 'Node.js', percentage: '85%', level: 'Advanced', icon: <FaNodeJs aria-label="Node.js" /> },
    { name: 'Express.js', percentage: '90%', level: 'Proficient', icon: <SiExpress aria-label="Express.js" /> },
    { name: 'MongoDB', percentage: '88%', level: 'Proficient', icon: <SiMongodb aria-label="MongoDB" /> },
  ];

  const projects = [
    {
      title: 'Social Media Clone',
      description: 'Fast, secure hosting solutions that ensure your website stays online and performs reliably.',
      github: '#',
      live: '#',
    },
    {
      title: 'Social Media Clone',
      description: 'Fast, secure hosting solutions that ensure your website stays online and performs reliably.',
      github: '#',
      live: '#',
    },
    {
      title: 'Social Media Clone',
      description: 'Fast, secure hosting solutions that ensure your website stays online and performs reliably.',
      github: '#',
      live: '#',
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-11 mx-auto">
          <section className="text-center mt-4">
            <h1 className="text-white font-weight-bold">Web Development</h1>
            <p>
              Building modern, responsive, and user-friendly websites using the latest technologies and best practices.
            </p>
            <p>
              Our web development process focuses on creating digital experiences that are not only visually appealing
              but also highly functional. We specialize in front-end and back-end development, delivering seamless
              performance across all devices.
            </p>
            <p>
              We work with technologies like HTML5, CSS3, JavaScript, React, Node.js, and MongoDB, ensuring your website
              ranks well and provides a great user experience.
            </p>
          </section>

          {/* Technologies Section */}
          <section className="mt-5">
            <h2 className="text-white font-weight-bold">Technologies I Use</h2>
            <ul className="tech-list mt-3 text-white">
              <li><FaReact /> React.js</li>
              <li><FaNodeJs /> Node.js</li>
              <li><SiExpress /> Express.js</li>
              <li><SiMongodb /> MongoDB</li>
              <li><FaJs /> JavaScript (ES6+)</li>
              <li><FaHtml5 /> HTML</li>
              <li><FaCss3Alt /> CSS</li>
              <li><BsBootstrap /> Bootstrap</li>
            </ul>
          </section>

          {/* Skills Progression Section */}
          <section className="mt-5">
            <h2 className="text-white">Skills Progression</h2>
            <div className="col-12 col-md-11 mx-auto d-flex flex-column flex-md-row gap-5">
              {/* Front-End Skills */}
              <div className="col-12 col-md-6 mx-auto my-4 d-flex flex-column gap-3">
                <h4 className="textRed" style={{ textDecoration: 'underline' }}>Front-End Skills:</h4>
                {webDevelopmentSkills.map((data, index) => (
                  <div key={index}>
                    <div className="d-flex justify-content-between text-white">
                      <p className="font-weight-normal mb-2">{data.icon} {data.name} <span className="skill-description">({data.level})</span></p>
                      <span>{data.percentage}</span>
                    </div>
                    <div className="progress-container">
                      <div className="skill-progress" style={{ width: data.percentage }}></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Frameworks & Libraries */}
              <div className="col-12 col-md-6 mx-auto my-4 d-flex flex-column gap-3">
                <h4 className="textRed" style={{ textDecoration: "underline" }}>Frameworks & Libraries:</h4>
                {frameWorks.map((data, index) => (
                  <div key={index}>
                    <div className="d-flex justify-content-between text-white">
                      <p className="font-weight-normal mb-2">{data.icon} {data.name} <span className="skill-description">({data.level})</span></p>
                      <span>{data.percentage}</span>
                    </div>
                    <div className="progress-container">
                      <div className="skill-progress" style={{ width: data.percentage }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="my-4">
            <h2 className="text-white">My Projects</h2>
            <div className='d-flex flex-wrap gap-5'>
              {projects.map((project, index) => (
                <div key={index} className="cart mx-auto project-cart p-3">
                  {/* <img src={processor} alt='Processor' /> */}
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="text15 font-weight-bold textRed mt-3">{project.title}</h2>
                    <div className="d-flex gap-2">
                      <a href={project.github} aria-label="GitHub Repository"><FaGithub className="project-icons" /></a>
                      <a href={project.live} aria-label="Live Demo"><CiGlobe className="project-icons" /></a>
                    </div>
                  </div>
                  <p className="text15 text-white mt-2">{project.description}</p>
                  <FaArrowRightLong className="textRed text22 arrow" />
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="my-4">
            <h2 className="text-white">Want to collaborate?</h2>
            <p>Feel free to reach out if you're looking for a web developer to help with your project!</p>
            <a href="https://wa.me/03207521951" className="contact-btn" target="_blank" rel="noopener noreferrer">
              Contact Me
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;