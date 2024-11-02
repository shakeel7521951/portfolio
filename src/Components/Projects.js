import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { projects } from './projects/ProjectsData';

const Projects = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1
        }
    };

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div id='projects' className='col-12 col-md-11 mx-auto mb-4'>
                    <div className='d-flex flex-column align-items-center my-4 mx-auto'>
                        <h6 className='textRed font-weight-normal mb-0' style={{ fontSize: "13px" }}>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h6>
                        <h1 className='font-weight-bold text-white'>My Projects</h1>
                    </div>
                    <div className='col-12 my-4'>
                        <Carousel
                            infinite={true}
                            responsive={responsive}
                            showDots={true}
                            autoPlay={true}
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            {
                                projects.map((data) => (
                                    <div onClick={() => window.location.href = `/projectDetail/${data.id}`} key={data.id} className='cart mx-auto project-cart p-3'>
                                        <img src={data.image} alt='Processor' />
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h2 className='text15 font-weight-bold textRed mt-3'>{data.title}</h2>
                                            <div className='d-flex gap-2'>
                                                <FaGithub className='project-icons' onClick={() => window.location.href = data.githubLink} />
                                                <CiGlobe className='project-icons' onClick={() => window.location.href = data.projectLink} />
                                            </div>
                                        </div>
                                        <p className="text15 text-white mt-2">
                                            {data.description.split(" ").slice(0, 15).join(" ")}{data.description.split(" ").length > 15 ? "..." : ""}
                                        </p>
                                        <FaArrowRightLong className='textRed text22 arrow' />
                                    </div>
                                ))
                            }
                        </Carousel>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects