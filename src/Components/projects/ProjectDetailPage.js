import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './ProjectsData';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((proj) => proj.id === parseInt(id));

    if (!project) {
        return <div className="text-white">Project not found</div>;
    }

    return (
        <div className="container">
            <div className='row'>
                <div className='col-12 col-md-12 mx-auto'>
                    <div className='text-center my-3'>
                        <h5 className='textRed mb-0'>Project</h5>
                        <h1 className="text-white mb-0">{project.title}</h1>
                    </div>
                    <div className="project-overview">
                        <img src={project.image} alt={project.title} className="img-fluid project-main-image" />
                        <p className="text-white mt-3 text-center">{project.description}</p>
                        <div className="buttons gap-3">
                            <a href={project.githubLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                            <a href={project.projectLink} className="btn btn-success" target="_blank" rel="noopener noreferrer">View Live Demo</a>
                        </div>
                    </div>


                    <section className="mt-5">
                        <h2 className="text-white font-weight-bold">Technologies I Use</h2>
                        <ul className="tech-list mt-3 text-white">
                            {project.features && project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </section>


                    <section className="mt-5">
                        <h2 className="text-white font-weight-bold">Technologies I Use</h2>
                        <ul className="tech-list mt-3 text-white">
                            {project.technologies && project.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                         </ul>
                         </section>

                    <h3 className="text-white mt-5">Gallery</h3>
                    <div className="gallery mb-5">
                        {project.additionalImages && project.additionalImages.map((img, index) => (
                            <img key={index} src={img} alt={`${project.title} screenshot ${index + 1}`} className="img-fluid" />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
