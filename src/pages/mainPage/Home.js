import React from 'react';
import '../../App.css';
import Biography from "./sections/Biography";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import {useParams} from "react-router-dom";

function Home() {
    let {section} = useParams();

    React.useEffect(() => {

        const element = document.getElementById(section)

        setTimeout(() => {
            window.scrollTo({
                behavior: element ? "smooth" : "auto",
                top: element ? element.offsetTop : 0
            });
        }, 100);

    }, []);


    return (
        <div>
            <Biography id="biography"/>
            <Skills id="skills"/>
            <Experience id="experience"/>
            <Projects id="projects"/>
            <Education id="education"/>
            <Contact id="contact"/>
        </div>

    );
}

export default Home;
