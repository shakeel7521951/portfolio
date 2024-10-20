import React from 'react';
import { FaPython, FaGithub } from 'react-icons/fa';
import { SiTensorflow, SiPandas, SiNumpy, SiScikitlearn, SiPlotly, SiJupyter } from 'react-icons/si';
import { FaArrowRightLong } from 'react-icons/fa6';
import { CiGlobe } from 'react-icons/ci';

const DataScience = () => {
  const dataScienceSkills = [
    { name: 'Numpy', percentage: '95%', level: 'Expert', icon: <FaPython aria-label="Numpy" /> },
    { name: 'Pandas', percentage: '92%', level: 'Advanced', icon: <SiPandas aria-label="Pandas" /> },
    { name: 'Matplotlib', percentage: '88%', level: 'Proficient', icon: <SiPlotly aria-label="Matplotlib" /> },
    { name: 'Seaborn', percentage: '88%', level: 'Proficient', icon: <SiPlotly aria-label="Seaborn" /> },
  ];

  const frameworks = [
    { name: 'Data Analysis', percentage: '85%', level: 'Advanced', icon: <SiTensorflow aria-label="TensorFlow" /> },
    { name: 'Machine Learning', percentage: '90%', level: 'Proficient', icon: <SiScikitlearn aria-label="Scikit-learn" /> },
    { name: 'Deep Learning', percentage: '72%', level: 'Expert', icon: <SiJupyter aria-label="Jupyter" /> },
    { name: 'Data Science', percentage: '70%', level: 'Expert', icon: <SiJupyter aria-label="Jupyter" /> },
  ];

  const projects = [
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-11 mx-auto">
          <section className="text-center mt-4">
            <h1 className="text-white font-weight-bold">Data Science</h1>
            <p>
              Applying data science techniques and tools to solve real-world problems, transforming data into insights.
            </p>
            <p>
              My expertise lies in building predictive models, data visualization, and machine learning solutions to drive
              data-driven decision making.
            </p>
            <p>
              I work with technologies like Python, TensorFlow, Pandas, and Scikit-learn, ensuring robust analysis and
              results.
            </p>
          </section>

          {/* Technologies Section */}
          <section className="mt-5">
            <h2 className="text-white font-weight-bold">Technologies I Use</h2>
            <ul className="tech-list mt-3 text-white">
              <li><FaPython /> Python</li>
              <li><SiTensorflow /> TensorFlow</li>
              <li><SiPandas /> Pandas</li>
              <li><SiNumpy /> NumPy</li>
              <li><SiScikitlearn /> Scikit-learn</li>
              <li><SiPlotly /> Matplotlib/Plotly</li>
              <li><SiJupyter /> Jupyter</li>
            </ul>
          </section>

          {/* Skills Progression Section */}
          <section className="mt-5">
            <h2 className="text-white">Skills Progression</h2>
            <div className="col-12 col-md-11 mx-auto d-flex flex-column flex-md-row gap-5">
              {/* Data Science Skills */}
              <div className="col-12 col-md-6 mx-auto my-4 d-flex flex-column gap-3">
                <h4 className="textRed" style={{ textDecoration: 'underline' }}>Python Libraries:</h4>
                {dataScienceSkills.map((data, index) => (
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
                <h4 className="textRed" style={{ textDecoration: "underline" }}>DataScience Skills:</h4>
                {frameworks.map((data, index) => (
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
              <h1 className='text-center mx-auto mb-4 textRed'>Not Available</h1>
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
            <p>Feel free to reach out if you're looking for a data scientist to help with your project!</p>
            <a href="https://wa.me/03207521951" className="contact-btn" target="_blank" rel="noopener noreferrer">
              Contact Me
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataScience;
