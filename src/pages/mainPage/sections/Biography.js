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

function Biography() {
    const styles = {
        name: {
            fontWeight: "bold",
            fontSize: 24,
        },
        topMenu: {
            marginLeft: 30
        },
        cvHeader: {
            // marginTop: 100,
            paddingTop: 100,
            backgroundColor: "#eeeeee"
        },
        userAvatar: {
            margin: "auto",
            width: 270,
            height: 270,
        },
        profileSection: {
            marginLeft: "auto",
            marginRight: "auto",
        },
        biography: {
            fontSize: 18
        },
        detailedCV: {
            marginLeft: 18
        },
        paper: {
            textAlign: 'center',
            whiteSpace: 'nowrap',
        }

    };

    return (
        <div>
            <AppBar position="fixed" style={styles.appBar}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <Box style={styles.name}>
                            Hasan Mhd Amin
                        </Box>

                        <Box style={styles.topMenu}>

                            <Button color="inherit">
                                Home
                            </Button>
                            <Button color="inherit">
                                Skills
                            </Button>
                            <Button color="inherit">
                                Projects
                            </Button>
                        </Box>

                    </Toolbar>
                </Container>

            </AppBar>


            <header style={styles.cvHeader}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item lg={4}>
                            <div style={styles.profileSection}>
                                <div style={styles.paper}>
                                    <Avatar alt="Hasan Mhd Amin photo"
                                            src={process.env.PUBLIC_URL + "/images/hasan.jpg"}
                                            style={styles.userAvatar}/>

                                    <h1 className={"fontStyle"}>Hasan Mhd Amin</h1>
                                    <h2 className={"fontStyle subheading"}>Android Application Developer <br/>
                                        Full Stack Developer</h2>
                                    <EmailIcon color="primary" style={{fontSize: 50}}/>
                                    <LinkedInIcon color="primary" style={{fontSize: 50}}/>
                                    <GitHubIcon color="primary" style={{fontSize: 50}}/>
                                </div>

                            </div>
                        </Grid>
                        <Grid item xs={8}>
                            <div className={"fontStyle"}>

                                <h1 className={"fontStyle"}>Biography</h1>
                                <p style={styles.biography}>

                                    I am a software engineer with a passion for computer science. I earned a Bachelor’s
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