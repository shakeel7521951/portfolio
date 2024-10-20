import React from 'react'
import Home from './Home'
import Features from './Features';
import Resume from './Resume/Resume';
import Contact from './Contact';
import Projects from './Projects';

const Main = () => {
    return (
        <div>
            <Home />
            <Features />
            <Projects />
            <Resume />
            <Contact />
        </div>
    )
}

export default Main
