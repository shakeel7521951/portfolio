import React from 'react';
import { FaWordpress, FaGithub } from 'react-icons/fa';
import { CiGlobe } from 'react-icons/ci';
import { FaArrowRightLong } from 'react-icons/fa6';

const WordPressPage = () => {
  const wordpressSkills = [
    { name: 'WordPress Themes', percentage: '95%', level: 'Expert', icon: <FaWordpress aria-label="WordPress Themes" /> },
    { name: 'WordPress Plugins', percentage: '90%', level: 'Proficient', icon: <FaWordpress aria-label="WordPress Plugins" /> },
    { name: 'Domain Name Setup', percentage: '85%', level: 'Proficient', icon: <CiGlobe aria-label="Domain Name Setup" /> },
    { name: 'Web Hosting Configuration', percentage: '88%', level: 'Proficient', icon: <FaWordpress aria-label="Web Hosting" /> },
  ];

  const projects = [

  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-11 mx-auto">
          <section className="text-center mt-4">
            <h1 className="text-white font-weight-bold">WordPress Development Services</h1>
            <p>
              I specialize in creating custom WordPress websites tailored to your needs, whether it's theme development, plugin customization, or full site setup. My expertise ensures that your WordPress site is not only visually appealing but also optimized for performance.
            </p>
            <p>
              From domain name setup and hosting configuration to ongoing maintenance and SEO optimization, I offer a complete package for your WordPress website. Whether you need an e-commerce solution, a personal blog, or a corporate website, I have the skills to deliver a professional result.
            </p>
          </section>

          {/* Core Services Section */}
          <section className="mt-5">
            <h2 className="text-white font-weight-bold">Core WordPress Services</h2>
            <ul className="tech-list mt-3 text-white">
              <li><FaWordpress /> WordPress Themes</li>
              <li><FaWordpress /> Custom Plugins</li>
              <li><CiGlobe /> Domain Name Setup</li>
              <li><FaWordpress /> Web Hosting Configuration</li>
              <li><FaWordpress /> SEO Optimization</li>
            </ul>
          </section>

          {/* Skills Progression Section */}
          <section className="mt-5">
            <h2 className="text-white">Skills Progression</h2>
            <div className="col-12 col-md-11 mx-auto d-flex flex-column flex-md-row gap-5">
              {/* WordPress Skills */}
              <div className="col-12 col-md-6 mx-auto my-4 d-flex flex-column gap-3">
                <h4 className="textRed" style={{ textDecoration: 'underline' }}>WordPress Development:</h4>
                {wordpressSkills.map((data, index) => (
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
              <h1 className='text-center mx-auto textRed mb-4'>Not Available</h1>
              {projects.map((project, index) => (
                <div key={index} className="cart mx-auto project-cart p-3">
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
            <p>Feel free to reach out if you're looking for a WordPress developer to help with your project!</p>
            <a href="https://wa.me/+923207521951" className="contact-btn" target="_blank" rel="noopener noreferrer">
              Contact Me
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WordPressPage;
