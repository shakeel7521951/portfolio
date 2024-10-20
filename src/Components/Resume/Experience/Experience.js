import React from 'react';
// import SkillsProgression from './SkillsProgression';
import {ExperienceData, MachineLearningExperienceData} from './ExperinceData';

const Experience = () => {
    return (
        <div className='col-12 col-md-11 mx-auto d-flex flex-wrap gap-5 justify-content-between mt-5'>
            <div className='flex-item'>
                <p className='textRed mb-0'>2023-2024</p>
                <h2 className='font-weight-bold'>Web Development</h2>
                <div className='my-4 d-flex flex-column gap-4 education-main' style={{ minHeight: '400px' }}>
                    {
                        ExperienceData.map((data) => (
                            <div id={data.id} className='education'>
                                <p className='circle'></p>
                                <hr className='connect text-info' />
                                <div className='content'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <h4 className='text-white font-weight-bold mb-0'>{data.title}</h4>
                                            <p className='text13'>{data.institute} <span>({data.duration})</span></p>
                                        </div>
                                        <span className='textRed result my-auto p-1 rounded text13 px-2 bg-black '>{data.result}</span>
                                    </div>
                                    <p className='text-white text15'>{data.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex-item'>
                <p className='textRed mb-0'>2024-Present</p>
                <h2 className='font-weight-bold'>Machine Learning</h2>
                <div className='my-4 d-flex flex-column gap-4 education-main' style={{ minHeight: '400px' }}>
                    {
                        MachineLearningExperienceData.map((data) => (
                            <div id={data.id} className='education'>
                                <p className='circle'></p>
                                <hr className='connect text-info' />
                                <div className='content'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <h5 className='text-white font-weight-bold mb-0'>{data.title}</h5>
                                            <p className='text13'>{data.institute} <span>({data.duration})</span></p>
                                        </div>
                                        <span className='textRed result my-auto p-1 rounded text13 px-2 bg-black '>{data.result}</span>
                                    </div>
                                    <p className='text-white text15'>{data.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience;