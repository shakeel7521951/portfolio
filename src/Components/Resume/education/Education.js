import React from 'react';
import educationData from './educationData';
import SkillsProgression from './SkillsProgression';

const Education = () => {
    return (
        <div className='col-12 col-md-11 mx-auto d-flex flex-wrap gap-5 justify-content-between'>
            <div className='flex-item'>
                <p className='textRed mb-0'>2018 - 2026</p>
                <h2 className='font-weight-bold'>Education Quality</h2>
                <div className='my-4 d-flex flex-column gap-4 education-main' style={{ minHeight: '640px' }}>
                    {
                        educationData.map((data) => (
                            <div id={data.id} className='education cursor-pointer'>
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
                <p className='textRed mb-0'>2020 - 2024</p>
                <h2 className='font-weight-bold'>Skills Progression</h2>
                <div className='my-4 d-flex flex-column gap-4 education-main' style={{ minHeight: '640px' }}>
                    {
                        SkillsProgression.map((data) => (
                            <div id={data.id} className='education cursor-pointer'>
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
        </div>
    )
}

export default Education