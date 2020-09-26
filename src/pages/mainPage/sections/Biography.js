import React from 'react';
import '../../../App.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GetAppIcon from '@material-ui/icons/GetApp';
import {Link} from 'react-scroll';

function Biography() {
    const styles = {
        name: {
            fontWeight: "bold",
            fontSize: 30,
            cursor: "pointer",
        },
        topMenu: {
            marginLeft: 30
        },
        cvHeader: {
            paddingBottom: 50,
            paddingTop: 100,
            backgroundColor: "#ffffff"
        },
        userAvatar: {
            margin: "auto",
            width: 270,
            height: 270,
        },
        profileSection: {
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: 'center',

        },
        profileName: {
            fontSize: 40,
            marginTop: 10
        },
        profileExperience: {
            fontSize: 20,
            marginBottom: 20,
        },
        biography: {
            fontSize: 18,
            paddingLeft: 60,
        },
        detailedCV: {
            marginLeft: 18
        },
    };

    return (
        <div id="home" className={"fontStyle"}>
            <AppBar position="fixed" style={styles.appBar}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <Box style={styles.name}>
                            Hasan Mhd Amin
                        </Box>

                        <Box style={styles.topMenu}>

                            <Link to="home" spy={true} smooth={true} duration={1000} offset={-50}>
                                <Button color="inherit">
                                    Home
                                </Button>
                            </Link>
                            <Link to="skills" spy={true} smooth={true} duration={1000} offset={-50}>
                                <Button color="inherit">
                                    Skills
                                </Button>
                            </Link>
                            <Link to="experience" spy={true} smooth={true} duration={1000} offset={-50}>
                                <Button color="inherit">
                                    Experience
                                </Button>
                            </Link>
                            <Link to="projects" spy={true} smooth={true} duration={1000} offset={-50}>
                                <Button color="inherit">
                                    Projects
                                </Button>
                            </Link>
                            <Link to="education" spy={true} smooth={true} duration={1000} offset={-50}>
                                <Button color="inherit">
                                    Education
                                </Button>
                            </Link>
                        </Box>

                    </Toolbar>
                </Container>

            </AppBar>


            <header style={styles.cvHeader}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item lg={4}>
                            <div style={styles.profileSection}>
                                <div>
                                    <Avatar alt="Hasan Mhd Amin photo"
                                            src={process.env.PUBLIC_URL + "/images/hasan.jpg"}
                                            style={styles.userAvatar}/>

                                    <div className={"fontStyle heading"} style={styles.profileName}>Hasan Mhd Amin</div>
                                    <div className={"fontStyle subheading"} style={styles.profileExperience}>Android
                                        Application Developer <br/>
                                        Full Stack Developer
                                    </div>
                                    <EmailIcon color="primary" style={{fontSize: 50}}/>
                                    <LinkedInIcon color="primary" style={{fontSize: 50}}/>
                                    <GitHubIcon color="primary" style={{fontSize: 50}}/>
                                </div>

                            </div>
                        </Grid>
                        <Grid item xs={8} style={styles.biography}>
                            <div className={"fontStyle"}>

                                <h1 className={"fontStyle"}>Biography</h1>
                                <p>

                                    I am a <b>software engineer</b> with a passion for computer science. I earned a
                                    Bachelor’s
                                    degree in Informatics Engineering from Arab International University, and then a
                                    Master’s degree in Computer Engineering from the University of Duisburg-Essen.
                                    <br/>
                                    I enjoy being challenged and engaging with projects that require me to open my mind
                                    and learn new technologies.
                                    <br/>
                                    I build systems and solutions that meet customer needs. I have good experiences with
                                    developing native Android applications and web applications using JS frameworks,
                                    e.g. ReactJS for frontend, and Spring Boot/Java for the backend.
                                    <br/>
                                    I believe that I have a lot to contribute to a team environment; I love to help
                                    resolve group issues through research and communication.
                                </p>
                            </div>

                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                startIcon={<GetAppIcon/>}
                            >
                                Download C.V.
                            </Button>

                            <Button
                                variant="outlined"
                                color="primary"
                                size="large"
                                startIcon={<GetAppIcon/>}
                                style={styles.detailedCV}
                            >
                                Download detailed C.V.
                            </Button>

                        </Grid>
                    </Grid>
                </Container>

            </header>
        </div>

    );
}

export default Biography;
