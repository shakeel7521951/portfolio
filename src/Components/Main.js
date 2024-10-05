import React from 'react'
import Home from './Home'
import Features from './Features';
import Projects from './Projects';
import Resume from './Resume/Resume';
import Contact from './Contact';

const Main = () => {
    return (
        <div>
            <Home/>
            <Features />
            <Projects />
            <Resume />
            <Contact />
        </div>
    )
}

export default Main