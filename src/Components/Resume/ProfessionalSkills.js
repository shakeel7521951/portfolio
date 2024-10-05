import React from 'react';

const ProfessionalSkills = () => {
    const webDevelopmentSkills = [
        { name: 'React', percentage: '100%' },
        { name: 'Node, Express', percentage: '85%' },
        { name: 'MongoDB', percentage: '90%' },
        { name: 'Bootstrap', percentage: '100%' },
        { name: 'WordPress', percentage: '95%' },
    ];

    const dataScienceSkills = [
        { name: 'Python', percentage: '96%' },
        { name: 'Machine Learning', percentage: '85%' },
        { name: 'Deep Learning', percentage: '90%' },
        { name: 'Data Visualization', percentage: '88%' },
        { name: 'Statistical Analysis', percentage: '92%' },
    ];

    return (
        <div className='col-12 col-md-11 mx-auto my-4 d-flex flex-column flex-md-row gap-md-5'>
            <div className='col-12 col-md-6 mx-auto p-3'>
                <div>
                    <h4 className='font-weight-normal textRed text15'>Web Development Skills</h4>
                    <h1 className='font-weight-bold text-white text22'>Web Development</h1>
                </div>
                <div className='my-4 d-flex flex-column gap-3'>
                    {webDevelopmentSkills.map((data, index) => (
                        <div key={index}>
                            <div className='d-flex justify-content-between text-white'>
                                <p className='font-weight-normal mb-2'>{data.name}</p>
                                <span>{data.percentage}</span>
                            </div>
                            <div className='progress-container'>
                                <div className='skill-progress' style={{ width: data.percentage }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='col-12 col-md-6 mx-auto p-3'>
                <div>
                    <h4 className='font-weight-normal textRed text15'>Data Science Skills</h4>
                    <h1 className='font-weight-bold text-white text22'>Data Science</h1>
                </div>
                <div className='my-4 d-flex flex-column gap-3'>
                    {dataScienceSkills.map((data, index) => (
                        <div key={index}>
                            <div className='d-flex justify-content-between text-white'>
                                <p className='font-weight-normal mb-2'>{data.name}</p>
                                <span>{data.percentage}</span>
                            </div>
                            <div className='progress-container'>
                                <div className='skill-progress' style={{ width: data.percentage }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProfessionalSkills;
