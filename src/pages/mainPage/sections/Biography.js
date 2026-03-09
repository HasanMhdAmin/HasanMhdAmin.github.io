import React from 'react';
import '../../../App.css';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GetAppIcon from '@mui/icons-material/GetApp';
import {Link} from 'react-scroll';
import MobileAppBar from "../../MobileAppBar";
import BiographyData from '../../../projectsResource/biography';
import MainConfig from '../../../projectsResource/main_config';


function Biography() {
    const biographyData = BiographyData
    const mainConfig = MainConfig
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
        },
        userAvatar: {
            margin: "auto",
            width: 262,
            height: 262,
        },
        profileSection: {
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: 'center',
        },
        profileName: {
            fontSize: 40,
            marginTop: 14,
            fontWeight: 700,
        },
        profileExperience: {
            fontSize: 20,
            marginBottom: 20,
            color: '#555',
            fontWeight: 300,
        },
        biography: {
            fontSize: 18,
            lineHeight: 1.7,
        },
        cvLink: {
            textDecoration: "none",
        },
        detailedCV: {
            marginLeft: 18
        },
        ctaRow: {
            marginTop: 28,
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
        },
    };

    const email = () => {
        if (mainConfig.contact.email != null)
            return <a className="social-link" href={"mailto:" + mainConfig.contact.email} target="_blank" rel="noreferrer">
                <EmailIcon color="primary" style={{fontSize: 46}}/>
            </a>
        else
            return <div/>
    };

    const linkedin = () => {
        if (mainConfig.contact.linkedin != null)
            return <a className="social-link" href={mainConfig.contact.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon color="primary" style={{fontSize: 46}}/>
            </a>
        else
            return <div/>
    };

    const github = () => {
        if (mainConfig.contact.github != null)
            return <a className="social-link" href={mainConfig.contact.github} target="_blank" rel="noreferrer">
                <GitHubIcon color="primary" style={{fontSize: 40}}/>
            </a>
        else
            return <div/>
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
                            {mainConfig.name}
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

            <header style={styles.cvHeader} className="hero-header">
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item sm={4} xs={12}>
                            <div style={styles.profileSection}>
                                <div>
                                    <div className="avatar-ring" style={{display: 'inline-block'}}>
                                        <Avatar alt={mainConfig.name + " photo"}
                                                src={process.env.PUBLIC_URL + mainConfig.picture}
                                                style={styles.userAvatar}/>
                                    </div>

                                    <div className={"fontStyle heading"}
                                         style={styles.profileName}>{mainConfig.name}</div>
                                    <div className={"fontStyle subheading"} style={styles.profileExperience}>
                                        <div dangerouslySetInnerHTML={{__html: mainConfig.headline}}/>
                                    </div>

                                    <div>
                                        {email()}
                                        {linkedin()}
                                        {github()}
                                    </div>

                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={8} xs={12} style={styles.biography}>
                            <div className={"fontStyle"}>
                                <h1 className={"fontStyle"}>Biography</h1>
                                <div dangerouslySetInnerHTML={{__html: biographyData.biography}}/>
                            </div>

                            <div style={styles.ctaRow}>
                                <a style={styles.cvLink}
                                   href={mainConfig.cvUrl}
                                   target="_blank"
                                   rel="noreferrer">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        startIcon={<GetAppIcon/>}
                                    >
                                        Download C.V.
                                    </Button>
                                </a>
                            </div>

                        </Grid>
                    </Grid>
                </Container>

            </header>
        </div>

    );
}

export default Biography;
