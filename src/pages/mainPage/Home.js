import React from 'react';
import '../../App.css';
import Biography from "./sections/Biography";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";


function Home() {
    return (
        <div>
            <Biography/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Education/>
        </div>

    );
}

export default Home;
