import React, { useState } from 'react'
import { motion } from "framer-motion"
import ProfessionalSkills from './ProfessionalSkills';
import Education from './education/Education';


const Resume = () => {
    const [active, setActive] = useState('education');

    const handleActive = (value) => {
        setActive(value)
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div id='resume' className='col-12 col-md-11 mx-auto mb-4'>
                    <div className='d-flex flex-column mx-auto text-center'>
                        <h6 className='textRed text13 mb-0'>1+ YEAR OF EXPERIENCE</h6>
                        <h1 className='text-white font-weight-bold'>My Resume</h1>
                    </div>
                    <div className='bg-black justify-content-between d-flex text-white rounded align-items-center text-center'>
                        <div className={`col-3 resume ${active === 'education' ? 'activeResume' : ''}`} onClick={() => handleActive('education')}>
                            <h4>Education</h4>
                        </div>
                        <div className={`col-3 resume ${active === 'skills' ? 'activeResume' : ''}`} onClick={() => handleActive('skills')}>
                            <h4>Professional Skills</h4>
                        </div>
                        <div className={`col-3 resume ${active === 'experience' ? 'activeResume' : ''}`} onClick={() => handleActive("experience")}>
                            <h4>Experience</h4>
                        </div>
                        <div className={`col-3 resume ${active === 'achievements' ? 'activeResume' : ''}`} onClick={() => handleActive("achievements")}>
                            <h4>Achievements</h4>
                        </div>
                    </div>
                    {
                        active === "education" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.5 } }} className='my-5'>
                             <Education />
                            </motion.div>
                        )
                    }

                    {active === "skills" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0.5 } }}
                            className='row'
                        >
                            <ProfessionalSkills />
                        </motion.div>
                    )}

                    {
                        active === "experience" && (
                            <motion.div className='row' initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} >

                            </motion.div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Resume