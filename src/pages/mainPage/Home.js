import React from 'react';
import '../../App.css';
import Biography from "./sections/Biography";
import Education from "./sections/Education";
import Experience from "./sections/Experience";


function Home() {
    return (
        <div>
            <Biography/>
            <Experience/>
            <Education/>
        </div>

    );
}

export default Home;
