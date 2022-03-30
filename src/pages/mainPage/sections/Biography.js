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
import MobileAppBar from "../../MobileAppBar";


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
        hamburger: {
            marginRight: 10,
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
        },
        cvLink: {
            textDecoration: "none",
        },
        detailedCV: {
            marginLeft: 18
        },
    };

    return (
        <div id="home" className={"fontStyle"}>
            <AppBar position="fixed"

            >
                <Container maxWidth="lg">
                    <Toolbar
                        id="landscapeFlex">
                        <Box style={styles.name} onClick={() => {
                            let url = window.location.protocol + "//" + window.location.host;
                            window.location.replace(url);
                        }}>
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
                            <Button color="inherit" onClick={() => {
                                window.scrollTo({
                                    behavior: document.body.scrollHeight ? "smooth" : "auto",
                                    top: document.body.scrollHeight
                                });
                            }}>
                                Contact
                            </Button>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>

            <MobileAppBar/>

            <header style={styles.cvHeader}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item sm={4} xs={12}>
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
                                    <a href="mailto:hasan.mhd.amin@gmail.com" target="_blank">
                                        <EmailIcon color="primary" style={{fontSize: 50}}/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/hasanmhdamin/" target="_blank">
                                        <LinkedInIcon color="primary" style={{fontSize: 50}}/>
                                    </a>
                                    <a href="https://github.com/hasanMhdAmin" target="_blank">
                                        <GitHubIcon color="primary" style={{fontSize: 50}}/>
                                    </a>
                                </div>

                            </div>
                        </Grid>
                        <Grid item sm={8} xs={12} style={styles.biography}>
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

                            <a style={styles.cvLink}
                               href="https://drive.google.com/file/d/1ujjhTEiO0WdIeQnpfxz4TyLotSi37u3d/view"
                               target="_blank">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    startIcon={<GetAppIcon/>}
                                >
                                    Download C.V.
                                </Button>
                            </a>

                        </Grid>
                    </Grid>
                </Container>

            </header>
        </div>

    );
}

export default Biography;
