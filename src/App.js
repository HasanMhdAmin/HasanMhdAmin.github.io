import React from 'react';
import './App.css';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import { HashRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/mainPage/Home";
import ProjectPage from "./pages/ProjectPage";

function App() {
    const theme = createMuiTheme({
        palette: {
            primary: {main: '#0a549f'},
            secondary: {main: '#757575'},
            // blue: {main: '#1a73e8'},
        },
        typography: {useNextVariants: true},
    });

    return (
      <div >
        <MuiThemeProvider theme={theme}>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/project/:name" component={ProjectPage}/>
            </Switch>
          </HashRouter>
        </MuiThemeProvider>
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
