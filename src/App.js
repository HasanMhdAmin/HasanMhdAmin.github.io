import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/mainPage/Home";
import ProjectPage from "./pages/ProjectPage";
import MainConfig from './projectsResource/main_config';
import {createTheme, ThemeProvider} from "@mui/material";

function App() {
    const mainConfig = MainConfig

    const theme = createTheme({
        palette: {
            primary: {main: mainConfig.color},
            secondary: {main: '#757575'},
            // blue: {main: '#1a73e8'},
        },
        typography: {useNextVariants: true},
    });

    function hashLinkScroll() {
        const { hash } = window.location;
        if (hash !== '') {
            // Push onto callback queue, so it runs after the DOM is updated,
            // this is required when navigating from a different page so that
            // the element is rendered on the page before trying to getElementById.
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) element.scrollIntoView();
            }, 0);
        }
    }

    return (
      <div >
        <ThemeProvider theme={theme}>
          <HashRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/home/:section" element={<Home/>} />
              <Route exact path="/project/:name" element={<ProjectPage/>}/>
            </Routes>
          </HashRouter>
        </ThemeProvider>
      </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
