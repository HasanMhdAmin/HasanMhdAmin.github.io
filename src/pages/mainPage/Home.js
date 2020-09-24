import React from 'react';
import '../../App.css';
import Biography from "./sections/Biography";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";


function Home() {
    return (
        <div>
            <Biography/>
            <Skills/>
            <Experience/>
            <Education/>
        </div>

    );
}

export default Home;
